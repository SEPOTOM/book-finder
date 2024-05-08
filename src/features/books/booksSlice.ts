import { createEntityAdapter, createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

import { apiSlice } from '../api/apiSlice';

import { BookResponse, SearchBooksResponse } from './types';

const booksAdapter = createEntityAdapter({
  selectId: (book: BookResponse) => book.key,
});

const initialState = booksAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchBooks: builder.query({
      query: (searchQuery) =>
        `?q=${encodeURIComponent(searchQuery)}&fields=title,author_name,cover_edition_key,key,publish_date&limit=12`,
      transformResponse: (responseData: SearchBooksResponse) =>
        booksAdapter.setAll(initialState, responseData.docs),
    }),
  }),
});

export const { useSearchBooksQuery } = extendedApiSlice;

export const createSearchedBooksSelectors = (searchQuery: string) => {
  const selectSearchedBooksResult =
    extendedApiSlice.endpoints.searchBooks.select(searchQuery);

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
