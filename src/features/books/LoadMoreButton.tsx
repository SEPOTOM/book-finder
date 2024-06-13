import Button from './Button';

import { LoadMoreButtonProps } from './types';

import { BOOKS_FOR_SEARCH_AMOUNT } from './consts';

const LoadMoreButton = ({
  areBooksLoading,
  lastLoadedBooksQuantity,
  onClick,
}: LoadMoreButtonProps) => {
  return (
    !areBooksLoading &&
    lastLoadedBooksQuantity === BOOKS_FOR_SEARCH_AMOUNT && (
      <Button onClick={onClick} className="sm:w-56 mt-3">
        Load more
      </Button>
    )
  );
};

export default LoadMoreButton;
