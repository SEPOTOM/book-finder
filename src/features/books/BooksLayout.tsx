import { useState } from 'react';

import { selectIsSearchBooksFetching } from './booksSlice';

import SearchBooksForm from './SearchBooksForm';
import BookItemsSet from './BookItemsSet';
import LoadMoreButton from './LoadMoreButton';

import { useAppSelector } from '../../common/hooks';

import { SearchTypes } from './types';

const BooksLayout = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<SearchTypes>('q');
  const [searchOffsets, setSearchOffsets] = useState<number[]>([]);

  const handleSearchFormSubmit = (newQuery: string, newType: SearchTypes) => {
    setSearchQuery(newQuery);
    setSearchType(newType);
    setSearchOffsets([0]);
  };

  const lastSearchParamsSet = {
    query: searchQuery,
    type: searchType,
    offset: searchOffsets[searchOffsets.length - 1],
  };

  const areBooksLoading = useAppSelector((state) =>
    selectIsSearchBooksFetching(state, lastSearchParamsSet)
  );

  return (
    <>
      <header className="flex justify-center py-6 sm:py-9">
        <SearchBooksForm
          searchQuery={searchQuery}
          searchType={searchType}
          onSubmit={handleSearchFormSubmit}
        />
      </header>
      <main aria-live="polite" className="grow flex flex-col">
        {searchQuery === '' ? (
          <p className="flex justify-center items-center h-full font-light text-2xl mob:text-3xl italic">
            Search results will be here
          </p>
        ) : (
          <>
            <ul className="grow flex flex-wrap">
              {searchOffsets.map((searchOffset) => (
                <BookItemsSet
                  searchQuery={searchQuery}
                  searchType={searchType}
                  offset={searchOffset}
                  key={searchOffset}
                />
              ))}
              <li></li>
            </ul>
            {areBooksLoading && (
              <p
                role="status"
                className="grow self-center mt-6 text-3xl font-bold text-center"
              >
                Loading...
              </p>
            )}
            <LoadMoreButton
              lastSearchParamsSet={lastSearchParamsSet}
              areBooksLoading={areBooksLoading}
              onClick={() =>
                setSearchOffsets([...searchOffsets, searchOffsets.length])
              }
            />
          </>
        )}
      </main>
      <footer className="flex justify-center py-8">
        <p className="text-lg italic">© 2024 Book Finder</p>
      </footer>
    </>
  );
};

export default BooksLayout;
