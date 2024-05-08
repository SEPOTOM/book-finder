import { createSearchedBooksSelectors } from './booksSlice';

import { useAppSelector } from '../../common/hooks';

import { BookItemProps } from './types';

const BookItem = ({ bookId, searchQuery }: BookItemProps) => {
  const { selectSearchedBookById } = createSearchedBooksSelectors(searchQuery);

  const { cover_edition_key, title, author_name, publish_date } =
    useAppSelector((state) => selectSearchedBookById(state, bookId));

  return (
    <li className="border-b-2 border-black border-solid">
      <img
        src={
          cover_edition_key
            ? `https://covers.openlibrary.org/b/olid/${cover_edition_key}-M.jpg`
            : ''
        }
        alt={title || 'Unknown title'}
      />
      <p>{title || 'Unknown title'}</p>
      <p>{author_name ? author_name[0] : 'Unknown author'}</p>
      <p>{publish_date ? publish_date[0] : 'Unknown publish date'}</p>
    </li>
  );
};

export default BookItem;
