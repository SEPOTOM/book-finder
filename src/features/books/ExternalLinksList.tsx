import ExternalLink from './ExternalLink';

import { ExternalLinksListProps } from './types';

const ExternalLinksList = ({
  amazonBooksId,
  googleBooksId,
  libriVoxId,
  openLibraryId,
}: ExternalLinksListProps) => {
  return (
    <ul className="flex flex-col items-end gap-y-1">
      <li>
        <ExternalLink href={`https://openlibrary.org${openLibraryId}`}>
          View on Open Library
        </ExternalLink>
      </li>
      {googleBooksId !== '' && (
        <li>
          <ExternalLink
            href={`https://books.google.com/books?id=${googleBooksId}`}
          >
            View on Google Books
          </ExternalLink>
        </li>
      )}
      {amazonBooksId !== '' && (
        <li>
          <ExternalLink href={`https://www.amazon.com/dp/${amazonBooksId}`}>
            View on Amazon Books
          </ExternalLink>
        </li>
      )}
      {libriVoxId !== '' && (
        <li>
          <ExternalLink href={`https://librivox.org/${libriVoxId}`}>
            View on LibriVox
          </ExternalLink>
        </li>
      )}
    </ul>
  );
};

export default ExternalLinksList;
