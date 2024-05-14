import { ExternalLinksListProps } from './types';

const ExternalLinksList = ({
  amazonBooksId,
  googleBooksId,
  libriVoxId,
}: ExternalLinksListProps) => {
  const noIds = !(amazonBooksId || googleBooksId || libriVoxId);

  if (noIds) {
    return <p>There is no external links for this book.</p>;
  }

  return (
    <ul>
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
