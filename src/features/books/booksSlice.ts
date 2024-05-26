import { createEntityAdapter, createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

import { apiSlice } from '../api/apiSlice';

import { BookResponse, SearchBooksResponse, SearchParams } from './types';

import { BOOKS_FOR_SEARCH_AMOUNT } from './consts';

const booksAdapter = createEntityAdapter({
  selectId: (book: BookResponse) => book.key,
});

const initialState = booksAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchBooks: builder.query({
      query: ({ query, type, offset }: SearchParams) => {
        const fields = [
          'title',
          'author_name',
          'cover_edition_key',
          'key',
          'publish_date',
          'id_amazon',
          'id_librivox',
          'id_google',
          'author_alternative_name',
          'first_publish_year',
        ];

        return `?${type}=${encodeURIComponent(query)}&fields=${fields.join(',')}&limit=${BOOKS_FOR_SEARCH_AMOUNT}&offset=${offset * BOOKS_FOR_SEARCH_AMOUNT}`;
      },
      transformResponse: (responseData: SearchBooksResponse) =>
        booksAdapter.setAll(initialState, responseData.docs),
    }),
  }),
});

export const { useSearchBooksQuery } = extendedApiSlice;

export const createSearchedBooksSelectors = (searchParams: SearchParams) => {
  const selectSearchedBooksResult =
    extendedApiSlice.endpoints.searchBooks.select(searchParams);

  const selectSearchedBooksData = createSelector(
    selectSearchedBooksResult,
    (searchedBooksResult) => searchedBooksResult.data
  );

  const {
    selectIds: selectSearchedBooksIds,
    selectById: selectSearchedBookById,
  } = booksAdapter.getSelectors(
    (state: RootState) => selectSearchedBooksData(state) ?? initialState
  );

  return {
    selectSearchedBooksIds,
    selectSearchedBookById,
  };
};

export const selectIsSearchBooksFetching = (
  state: RootState,
  searchParams: SearchParams
) => {
  const queryState =
    extendedApiSlice.endpoints.searchBooks.select(searchParams)(state);
  return queryState.isLoading;
};
