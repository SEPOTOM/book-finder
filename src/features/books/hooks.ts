import { SearchParams, SearchTypes } from './types';

export const useAuthorNames = (
  searchParams: SearchParams,
  authorNames: string[],
  authorAlternativeNames: string[]
) => {
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

  return {
    authorName,
    authorAlternativeName,
  };
};
