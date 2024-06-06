import { createSearchedBooksSelectors } from './booksSlice';

import Button from './Button';

import { useAppSelector } from '../../common/hooks';

import { LoadMoreButtonProps } from './types';

import { BOOKS_FOR_SEARCH_AMOUNT } from './consts';

const LoadMoreButton = ({
  lastSearchParamsSet,
  areBooksLoading,
  onClick,
}: LoadMoreButtonProps) => {
  const { selectSearchedBooksIds } =
    createSearchedBooksSelectors(lastSearchParamsSet);
  const lastSearchedBooksIds = useAppSelector(selectSearchedBooksIds);

  return (
    !areBooksLoading &&
    lastSearchedBooksIds.length === BOOKS_FOR_SEARCH_AMOUNT && (
      <Button onClick={onClick} className="sm:w-56 mt-3">
        Load more
      </Button>
    )
  );
};

export default LoadMoreButton;
