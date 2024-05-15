import { BookAuthorProps, SearchTypes } from './types';

const BookAuthor = ({
  searchParams,
  authorNames,
  authorAlternativeNames,
}: BookAuthorProps) => {
  let authorName = authorNames[0] || 'Unknown author';
  let authorAlternativeName = '';

  if (searchParams.type === SearchTypes.AUTHOR) {
    const searchQueryLowerCase = searchParams.query.toLowerCase();
    const searchedAuthorName = authorNames.find((name) =>
      name.toLowerCase().includes(searchQueryLowerCase)
    );

    if (searchedAuthorName) {
      authorName = searchedAuthorName;
    } else {
      const searchedAuthorAlternativeName = authorAlternativeNames.find(
        (name) => name.toLowerCase().includes(searchQueryLowerCase)
      );

      if (searchedAuthorAlternativeName) {
        authorAlternativeName = searchedAuthorAlternativeName;
      }
    }
  }

  return (
    <>
      <p className="text-lg">{authorName}</p>
      {authorAlternativeName !== '' && (
        <p className="text-lg">Alternative name: {authorAlternativeName}</p>
      )}
    </>
  );
};

export default BookAuthor;
