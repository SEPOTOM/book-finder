import { createSearchedBooksSelectors } from './booksSlice';

import { useAppSelector } from '../../common/hooks';

import { BookItemProps } from './types';

const BookItem = ({ bookId, searchQuery }: BookItemProps) => {
  const { selectSearchedBookById } = createSearchedBooksSelectors(searchQuery);

  const { cover_edition_key, title, author_name, publish_date } =
    useAppSelector((state) => selectSearchedBookById(state, bookId));

  return (
    <li className="basis-1/3 px-4 py-2">
      <div className="flex items-start gap-x-5 h-full p-5 border-4 border-black rounded-lg shadow-lg">
        <div className="shrink-0 w-44 max-h-72">
          <img
            src={
              cover_edition_key
                ? `https://covers.openlibrary.org/b/olid/${cover_edition_key}-M.jpg`
                : ''
            }
            alt={title || 'Unknown title'}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
        <div>
          <h2 className="mb-3 font-bold text-3xl">
            {title || 'Unknown title'}
          </h2>
          <p className="text-lg">
            {author_name ? author_name[0] : 'Unknown author'}
          </p>
          <p>{publish_date ? publish_date[0] : 'Unknown publish date'}</p>
        </div>
      </div>
    </li>
  );
};

export default BookItem;
