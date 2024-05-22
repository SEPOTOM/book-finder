import { SearchParams } from './types';

export const useAuthorNames = (
  searchParams: SearchParams,
  authorNames: string[],
  authorAlternativeNames: string[]
) => {
  let authorName = authorNames[0] || 'unknown';
  let authorAlternativeName = '';

  if (searchParams.type === 'author') {
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

export const usePublishDate = (
  publishDates: string[],
  firstPublishYear?: string
) => {
  let firstPublishDate = 'unknown';

  if (publishDates.length > 0 && firstPublishYear) {
    const firstPublishYearDates = publishDates.filter(
      (date) => date.includes(firstPublishYear) && date.length > 4
    );

    const earliestFirstPublishYearDate = firstPublishYearDates.reduce(
      (earliestDate, currentDate) => {
        const currentDateTimestamp = Date.parse(currentDate);
        const isCurrentDateTimestampNaN = isNaN(currentDateTimestamp);

        if (earliestDate === '' && !isCurrentDateTimestampNaN) {
          return currentDate;
        }

        const earliestDateTimestamp = Date.parse(earliestDate);

        if (
          !isNaN(earliestDateTimestamp) &&
          !isCurrentDateTimestampNaN &&
          currentDateTimestamp < earliestDateTimestamp
        ) {
          return currentDate;
        }

        return earliestDate;
      },
      ''
    );

    if (earliestFirstPublishYearDate !== '') {
      firstPublishDate = earliestFirstPublishYearDate;
    } else {
      firstPublishDate = firstPublishYear;
    }
  } else if (firstPublishYear) {
    firstPublishDate = firstPublishYear;
  }

  return firstPublishDate;
};
