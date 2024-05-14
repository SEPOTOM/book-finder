import { ExternalLinksListProps } from './types';

const ExternalLinksList = ({
  amazonBooksId,
  googleBooksId,
  libriVoxId,
  openLibraryId,
}: ExternalLinksListProps) => {
  return (
    <ul>
      <li>
        <a
          href={`https://openlibrary.org${openLibraryId}`}
          target="_blank"
          rel="noreferrer"
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
          >
            View on LibriVox
          </a>
        </li>
      )}
    </ul>
  );
};

export default ExternalLinksList;
