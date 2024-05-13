import { createSearchedBooksSelectors } from './booksSlice';

import { useAppSelector } from '../../common/hooks';

import ExternalLinksList from './ExternalLinksList';

import { BookItemProps } from './types';

import ImagePlaceholderSrc from '/img-placeholder.png';

const BookItem = ({ bookId, searchQuery }: BookItemProps) => {
  const { selectSearchedBookById } = createSearchedBooksSelectors(searchQuery);

  const {
    cover_edition_key,
    title,
    author_name,
    publish_date,
    id_amazon,
    id_google,
    id_librivox,
  } = useAppSelector((state) => selectSearchedBookById(state, bookId));

  const noImageClassName = cover_edition_key
    ? ''
    : 'flex items-center h-full bg-gray rounded-lg';

  return (
    <li className="basis-1/3 px-4 py-2">
      <div className="flex items-start gap-x-5 h-full p-5 border-4 border-black rounded-lg shadow-lg">
        <div className={`shrink-0 w-44 max-h-72 ${noImageClassName}`}>
          <img
            src={
              cover_edition_key
                ? `https://covers.openlibrary.org/b/olid/${cover_edition_key}-M.jpg`
                : ImagePlaceholderSrc
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
          <ExternalLinksList
            amazonBooksId={id_amazon ? id_amazon[0] : ''}
            googleBooksId={id_google ? id_google[0] : ''}
            libriVoxId={id_librivox ? id_librivox[0] : ''}
          />
        </div>
      </div>
    </li>
  );
};

export default BookItem;
