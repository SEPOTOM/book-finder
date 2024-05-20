import { BookDateProps } from './types';

import { usePublishDate } from './hooks';

const BookDate = (props: BookDateProps) => {
  const firstPublishDate = usePublishDate(props);

  return <p>Publication date: {firstPublishDate}</p>;
};

export default BookDate;
