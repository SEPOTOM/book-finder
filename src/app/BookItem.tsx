import { BookItemProps } from './types';

const BookItem = ({ bookId }: BookItemProps) => {
  return <li>{bookId}</li>;
};

export default BookItem;
