import { format, isValid, min } from 'date-fns';

import { BookDateProps } from './types';

const BookDate = ({ publishDates, firstPublishYear }: BookDateProps) => {
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

  return <p>Publication date: {firstPublishDate}</p>;
};

export default BookDate;
