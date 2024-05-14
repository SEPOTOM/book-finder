import { createSearchedBooksSelectors } from './booksSlice';

import { useAppSelector } from '../../common/hooks';

import ExternalLinksList from './ExternalLinksList';

import { BookItemProps } from './types';

import ImagePlaceholderSrc from '/img-placeholder.png';

const BookItem = ({ bookId, searchParams }: BookItemProps) => {
  const { selectSearchedBookById } = createSearchedBooksSelectors(searchParams);

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
    : 'bg-gray items-center mob:max-sm:h-full mid:max-lg:h-full 2xl:h-full';

  return (
    <li className="basis-full px-4 py-2 sm:basis-1/2 lg:basis-1/3">
      <div className="flex flex-col gap-5 w-full h-full p-5 border-4 border-black rounded-lg shadow-lg mob:max-sm:flex-row mid:max-lg:flex-row 2xl:flex-row">
        <div
          className={`self-center shrink-0 flex justify-center w-44 max-h-72 rounded-lg mob:max-sm:self-start mid:max-lg:self-start 2xl:self-start ${noImageClassName}`}
        >
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
            openLibraryId={bookId}
          />
        </div>
      </div>
    </li>
  );
};

export default BookItem;
