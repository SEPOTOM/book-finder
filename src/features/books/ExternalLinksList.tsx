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
        <a
          href={`https://openlibrary.org${openLibraryId}`}
          target="_blank"
          rel="noreferrer"
          className="font-medium italic text-blue-900 visited:text-purple-600 underline"
        >
          View on Open Library
        </a>
      </li>
      {googleBooksId !== '' && (
        <li>
          <a
            href={`https://books.google.com/books?id=${googleBooksId}`}
            target="_blank"
            rel="noreferrer"
            className="font-medium italic text-blue-900 visited:text-purple-600 underline"
          >
            View on Google Books
          </a>
        </li>
      )}
      {amazonBooksId !== '' && (
        <li>
          <a
            href={`https://www.amazon.com/dp/${amazonBooksId}`}
            target="_blank"
            rel="noreferrer"
            className="font-medium italic text-blue-900 visited:text-purple-600 underline"
          >
            View on Amazon Books
          </a>
        </li>
      )}
      {libriVoxId !== '' && (
        <li>
          <a
            href={`https://librivox.org/${libriVoxId}`}
            target="_blank"
            rel="noreferrer"
            className="font-medium italic text-blue-900 visited:text-purple-600 underline"
          >
            View on LibriVox
          </a>
        </li>
      )}
    </ul>
  );
};

export default ExternalLinksList;
