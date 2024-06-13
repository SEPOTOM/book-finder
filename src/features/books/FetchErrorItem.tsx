import clsx from 'clsx';

import Button from './Button';

import { FetchErrorItemProps } from './types';

const FetchErrorItem = ({
  offset,
  fetchError,
  onRetry,
}: FetchErrorItemProps) => {
  return (
    <div
      className={clsx(
        'grow flex flex-col justify-center items-center max-w-[1000px] mx-auto px-3 font-bold text-xl sm:text-3xl text-center',
        {
          'h-full': offset === 0,
          'mt-6 sm:mt-10': offset > 0,
        }
      )}
    >
      <p className="mb-5">
        An error occurred during the fetching. Please check your internet
        connection or try again later.
      </p>
      {fetchError && (
        <p>{fetchError.error ? fetchError.error : 'Unknown error'}</p>
      )}
      {offset > 0 && (
        <Button onClick={onRetry} className="w-full sm:w-56 mt-6">
          Retry
        </Button>
      )}
    </div>
  );
};

export default FetchErrorItem;
