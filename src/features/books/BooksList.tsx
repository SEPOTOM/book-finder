import {
  createSearchedBooksSelectors,
  useSearchBooksQuery,
} from './booksSlice';

import { useAppSelector } from '../../common/hooks';

import BookItem from './BookItem';

import { BooksListProps, SearchParams } from './types';

const BooksList = ({ searchQuery, searchType }: BooksListProps) => {
  const searchParams: SearchParams = {
    query: searchQuery,
    type: searchType,
  };

  const { isFetching } = useSearchBooksQuery(searchParams);

  const { selectSearchedBooksIds } = createSearchedBooksSelectors(searchParams);

  const booksIds = useAppSelector(selectSearchedBooksIds);

  if (isFetching) {
    return (
      <p className="flex justify-center items-center h-full text-3xl font-bold">
        Loading...
      </p>
    );
  }

  return (
    <ul className="flex flex-wrap">
      {booksIds.map((bookId) => {
        return (
          <BookItem
            bookId={String(bookId)}
            searchParams={searchParams}
            key={bookId}
          />
        );
      })}
    </ul>
  );
};

export default BooksList;
