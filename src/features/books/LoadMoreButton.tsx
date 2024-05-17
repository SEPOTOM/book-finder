import { useAppSelector } from '../../common/hooks';
import { selectIsSearchBooksFetching } from './booksSlice';
import { LoadMoreButtonProps } from './types';

const LoadMoreButton = ({
  lastSetSearchParams,
  onClick,
}: LoadMoreButtonProps) => {
  const areBooksLoading = useAppSelector((state) =>
    selectIsSearchBooksFetching(state, lastSetSearchParams)
  );

  return areBooksLoading ? null : (
    <button type="button" onClick={onClick} className="text-lg cursor-pointer">
      Load more
    </button>
  );
};

export default LoadMoreButton;
