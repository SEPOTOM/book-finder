import {
  createSearchedBooksSelectors,
  useSearchBooksQuery,
} from './booksSlice';

import BookItem from './BookItem';

import { useAppSelector } from '../../common/hooks';

import { BookItemsSetProps, FetchError, SearchParams } from './types';

const BookItemsSet = ({
  searchQuery,
  searchType,
  offset,
}: BookItemsSetProps) => {
  const searchParams: SearchParams = {
    query: searchQuery,
    type: searchType,
    offset,
  };

  const { isFetching, isError, error } = useSearchBooksQuery(searchParams);
  const fetchError = error as FetchError;

  const { selectSearchedBooksIds } = createSearchedBooksSelectors(searchParams);

  const booksIds = useAppSelector(selectSearchedBooksIds);

  if (isFetching) {
    return (
      <li className="grow self-center mt-6 text-3xl font-bold text-center">
        Loading...
      </li>
    );
  }

  if (isError) {
    return (
      <li className="grow flex flex-col justify-center items-center max-w-[1000px] h-full mx-auto px-3 font-bold text-xl sm:text-3xl text-center">
        <p className="mb-5">
          An error occurred during the fetching. Please check your internet
          connection or try again later.
        </p>
        {fetchError && (
          <p>{fetchError.error ? fetchError.error : 'Unknown error'}</p>
        )}
      </li>
    );
  }

  if (booksIds.length === 0 && offset === 0) {
    return (
      <li className="grow self-center text-2xl mob:text-3xl font-bold text-center">
        No books were found
      </li>
    );
  }

  return booksIds.map((bookId) => (
    <BookItem
      bookId={String(bookId)}
      searchParams={searchParams}
      key={bookId}
    />
  ));
};

export default BookItemsSet;
