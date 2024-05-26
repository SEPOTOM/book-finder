import {
  createSearchedBooksSelectors,
  selectIsSearchBooksFetching,
} from './booksSlice';

import { useAppSelector } from '../../common/hooks';

import { LoadMoreButtonProps } from './types';

import { BOOKS_FOR_SEARCH_AMOUNT } from './consts';

const LoadMoreButton = ({
  lastSetSearchParams,
  onClick,
}: LoadMoreButtonProps) => {
  const areBooksLoading = useAppSelector((state) =>
    selectIsSearchBooksFetching(state, lastSetSearchParams)
  );

  const { selectSearchedBooksIds } =
    createSearchedBooksSelectors(lastSetSearchParams);
  const lastSearchedBooksIds = useAppSelector(selectSearchedBooksIds);

  return (
    !areBooksLoading &&
    lastSearchedBooksIds.length === BOOKS_FOR_SEARCH_AMOUNT && (
      <button
        type="button"
        onClick={onClick}
        className="sm:w-56 mx-3 sm:mx-auto mt-3 py-2 text-xl border-2 border-black rounded-md cursor-pointer transition-transform hover:scale-110 active:scale-90"
      >
        Load more
      </button>
    )
  );
};

export default LoadMoreButton;
