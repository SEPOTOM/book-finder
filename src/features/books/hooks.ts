import { format, isValid, min } from 'date-fns';

import { BookDateProps, SearchParams, SearchTypes } from './types';

export const useAuthorNames = (
  searchParams: SearchParams,
  authorNames: string[],
  authorAlternativeNames: string[]
) => {
  let authorName = authorNames[0] || 'unknown';
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

export const usePublishDate = ({
  publishDates,
  firstPublishYear,
}: BookDateProps) => {
  let firstPublishDate = 'unknown';

  if (publishDates && firstPublishYear) {
    const firstPublishYearDatesStr = publishDates.filter((date) =>
      date.includes(firstPublishYear)
    );

    const firstPublishYearDates = firstPublishYearDatesStr
      .map((dateStr) => {
        const parsedDate = new Date(dateStr);
        if (isValid(parsedDate)) {
          return parsedDate;
        }
      })
      .filter((date) => date !== undefined) as Date[];

    if (firstPublishYearDates.length === 0) {
      firstPublishDate = firstPublishYear;
    } else {
      firstPublishDate = format(min(firstPublishYearDates), 'MMMM d, yyyy');
    }
  } else if (firstPublishYear) {
    firstPublishDate = firstPublishYear;
  }

  return firstPublishDate;
};
