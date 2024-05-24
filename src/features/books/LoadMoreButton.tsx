import { selectIsSearchBooksFetching } from './booksSlice';

import { useAppSelector } from '../../common/hooks';

import { LoadMoreButtonProps } from './types';

const LoadMoreButton = ({
  lastSetSearchParams,
  onClick,
}: LoadMoreButtonProps) => {
  const areBooksLoading = useAppSelector((state) =>
    selectIsSearchBooksFetching(state, lastSetSearchParams)
  );

  return (
    !areBooksLoading && (
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
