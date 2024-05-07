import BookItem from './BookItem';

const BooksList = () => {
  const booksIds: string[] = [];

  return (
    <ul>
      {booksIds.map((bookId) => {
        return <BookItem bookId={bookId} key={bookId} />;
      })}
    </ul>
  );
};

export default BooksList;
