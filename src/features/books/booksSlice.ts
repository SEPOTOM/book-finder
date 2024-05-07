import { createEntityAdapter } from '@reduxjs/toolkit';

import { apiSlice } from '../api/apiSlice';

import { SearchBooksResponse } from './types';

const booksAdapter = createEntityAdapter();

const initialState = booksAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchBooks: builder.query({
      query: (searchQuery) =>
        `?q=${encodeURIComponent(searchQuery)}&fields=title,author_name,cover_edition_key,key,publish_date&limit=12`,
      transformResponse: (responseData: SearchBooksResponse) => {
        const books = responseData.docs.map((book) => {
          return {
            ...book,
            id: book.key,
          };
        });
        return booksAdapter.setAll(initialState, books);
      },
    }),
  }),
});

export const { useSearchBooksQuery } = extendedApiSlice;
