import { useState } from 'react';
import clsx from 'clsx';

import { useSearchBooksQuery } from './booksSlice';

import SearchBooksForm from './SearchBooksForm';
import LoadMoreButton from './LoadMoreButton';
import BookItem from './BookItem';
import FetchErrorMessage from './FetchErrorMessage';

import { BookResponse, FetchError, SearchTypes } from './types';

const BooksLayout = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<SearchTypes>('q');
  const [searchOffset, setSearchOffset] = useState(0);
  const [books, setBooks] = useState<BookResponse[]>([]);

  const lastSearchParamsSet = {
    query: searchQuery,
    type: searchType,
    offset: searchOffset,
  };

  const {
    isFetching,
    isError,
    isSuccess,
    error,
    data = [],
    refetch,
  } = useSearchBooksQuery(lastSearchParamsSet);
  const fetchError = error as FetchError;

  const handleSearchFormSubmit = (newQuery: string, newType: SearchTypes) => {
    if (newQuery === searchQuery && newType === searchType && isSuccess) {
      return;
    }

    setSearchQuery(newQuery);
    setSearchType(newType);
    setSearchOffset(0);

    if (isError) {
      refetch();
    }
  };

  return (
    <>
      <header className="flex justify-center py-6 sm:py-9">
        <SearchBooksForm
          searchQuery={searchQuery}
          searchType={searchType}
          onSubmit={handleSearchFormSubmit}
        />
      </header>
      <main className="grow flex flex-col">
        <div
          aria-live="polite"
          className={clsx('flex flex-col', {
            grow: !isError,
          })}
        >
          {searchQuery === '' ? (
            <p className="flex justify-center items-center h-full font-light text-2xl mob:text-3xl italic">
              Search results will be here
            </p>
          ) : (
            <>
              <ul className="grow flex flex-wrap">
                {books.concat(isFetching || isError ? [] : data).map((book) => (
                  <BookItem
                    book={book}
                    searchParams={lastSearchParamsSet}
                    key={book.key}
                  />
                ))}
              </ul>
              {isFetching && (
                <p
                  role="status"
                  className="grow self-center mt-6 text-3xl font-bold text-center"
                >
                  Loading...
                </p>
              )}
              {!isError && (
                <LoadMoreButton
                  lastLoadedBooksQuantity={data?.length || 0}
                  areBooksLoading={isFetching}
                  onClick={() => {
                    if (!isError) {
                      setBooks([...books, ...data]);
                    }
                    setSearchOffset(searchOffset + 1);
                  }}
                />
              )}
              {data?.length === 0 &&
                books.length === 0 &&
                searchOffset === 0 &&
                !isFetching &&
                isSuccess && (
                  <p className="flex justify-center items-center h-full text-2xl mob:text-3xl font-bold text-center">
                    No books were found
                  </p>
                )}
            </>
          )}
        </div>
        {isError && (
          <FetchErrorMessage
            offset={searchOffset}
            fetchError={fetchError}
            onRetry={() => refetch()}
          />
        )}
      </main>
      <footer className="flex justify-center py-8">
        <p className="text-lg italic">© 2024 Book Finder</p>
      </footer>
    </>
  );
};

export default BooksLayout;
