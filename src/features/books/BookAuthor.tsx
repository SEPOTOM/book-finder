import { useAuthorNames } from './hooks';

import { BookAuthorProps } from './types';

const BookAuthor = (props: BookAuthorProps) => {
  const { authorName, authorAlternativeName } = useAuthorNames(props);

  return (
    <>
      <p className="text-lg">Author: {authorName}</p>
      {authorAlternativeName !== '' && (
        <p className="text-lg">Alternative name: {authorAlternativeName}</p>
      )}
    </>
  );
};

export default BookAuthor;
