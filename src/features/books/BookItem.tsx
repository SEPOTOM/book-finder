import clsx from 'clsx';

import ExternalLinksList from './ExternalLinksList';

import { useAuthorNames, usePublishDate } from './hooks';

import { BookItemProps } from './types';

import ImagePlaceholderSrc from '/img-placeholder.png';

const BookItem = ({ book, searchParams }: BookItemProps) => {
  const {
    cover_edition_key,
    title,
    author_name,
    author_alternative_name,
    publish_date,
    first_publish_year,
    id_amazon,
    id_google,
    id_librivox,
    key,
  } = book;

  const { authorName, authorAlternativeName } = useAuthorNames(
    searchParams,
    author_name || [],
    author_alternative_name || []
  );
  const firstPublishDate = usePublishDate(
    publish_date || [],
    first_publish_year?.toString()
  );

  const bookTitle = title || 'Unknown title';

  return (
    <li className="basis-full px-4 py-2 sm:basis-1/2 lg:basis-1/3">
      <div className="flex flex-col gap-5 w-full h-full p-5 border-4 border-black rounded-lg shadow-lg mob:max-sm:flex-row mid:max-lg:flex-row 2xl:flex-row">
        <div
          className={clsx(
            'self-center shrink-0 flex justify-center w-44 max-h-72 rounded-lg mob:max-sm:self-start mid:max-lg:self-start 2xl:self-start',
            {
              'bg-gray items-center mob:max-sm:h-full mid:max-lg:h-full 2xl:h-full':
                !cover_edition_key,
            }
          )}
        >
          <img
            src={
              cover_edition_key
                ? `https://covers.openlibrary.org/b/olid/${cover_edition_key}-M.jpg`
                : ImagePlaceholderSrc
            }
            alt={bookTitle}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
        <div className="grow flex flex-col gap-y-2">
          <h2 className="mb-1 font-bold text-3xl">{bookTitle}</h2>
          <p>
            <span className="font-bold">Publication date:</span>{' '}
            {firstPublishDate}
          </p>
          <div className="grow mb-1">
            <p className="text-lg">
              <span className="font-bold">Author:</span> {authorName}
            </p>
            {authorAlternativeName !== '' && (
              <p className="text-lg">
                <span className="font-bold">Alternative name:</span>{' '}
                {authorAlternativeName}
              </p>
            )}
          </div>
          <ExternalLinksList
            amazonBooksId={id_amazon ? id_amazon[0] : ''}
            googleBooksId={id_google ? id_google[0] : ''}
            libriVoxId={id_librivox ? id_librivox[0] : ''}
            openLibraryId={key}
          />
        </div>
      </div>
    </li>
  );
};

export default BookItem;
