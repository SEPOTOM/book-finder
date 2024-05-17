import {
  createSearchedBooksSelectors,
  useSearchBooksQuery,
} from './booksSlice';

import { useAppSelector } from '../../common/hooks';

import BookItem from './BookItem';

import { BookItemsSetProps, SearchParams } from './types';

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

  const { isFetching } = useSearchBooksQuery(searchParams);

  const { selectSearchedBooksIds } = createSearchedBooksSelectors(searchParams);

  const booksIds = useAppSelector(selectSearchedBooksIds);

  if (isFetching) {
    return (
      <li className="grow self-center text-3xl font-bold text-center">
        Loading...
      </li>
    );
  }

  return booksIds.map((bookId) => {
    return (
      <BookItem
        bookId={String(bookId)}
        searchParams={searchParams}
        key={bookId}
      />
    );
  });
};

export default BookItemsSet;
