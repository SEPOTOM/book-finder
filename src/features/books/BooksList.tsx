import {
  createSearchedBooksSelectors,
  useSearchBooksQuery,
} from './booksSlice';

import { useAppSelector } from '../../common/hooks';

import BookItem from './BookItem';

import { BooksListProps } from './types';

const BooksList = ({ searchQuery }: BooksListProps) => {
  const { isFetching } = useSearchBooksQuery(searchQuery);

  const { selectSearchedBooksIds } = createSearchedBooksSelectors(searchQuery);

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
            searchQuery={searchQuery}
            key={bookId}
          />
        );
      })}
    </ul>
  );
};

export default BooksList;
