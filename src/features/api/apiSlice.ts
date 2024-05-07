import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://openlibrary.org/search.json',
    headers: {
      'User-Agent': 'Book Finder/0.0 (mailto:artempetr2016@gmail.com)',
    },
  }),
  endpoints: () => ({}),
});
