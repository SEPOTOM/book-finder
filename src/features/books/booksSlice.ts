import { apiSlice } from '../api/apiSlice';

import { SearchBooksResponse, SearchParams } from './types';

import { BOOKS_FOR_SEARCH_AMOUNT } from './consts';

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
        responseData.docs,
    }),
  }),
});

export const { useSearchBooksQuery } = extendedApiSlice;
