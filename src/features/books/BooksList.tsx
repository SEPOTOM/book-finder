import {
  createSearchedBooksSelectors,
  useSearchBooksQuery,
} from './booksSlice';

import { useAppSelector } from '../../common/hooks';

import BookItem from './BookItem';

import { BooksListProps } from './types';

const BooksList = ({ searchQuery }: BooksListProps) => {
  useSearchBooksQuery(searchQuery);

  const { selectSearchedBooksIds } = createSearchedBooksSelectors(searchQuery);

  const booksIds = useAppSelector(selectSearchedBooksIds);

  return (
    <ul>
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
