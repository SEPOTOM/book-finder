import clsx from 'clsx';

import { FetchErrorItemProps } from './types';

const FetchErrorItem = ({
  offset,
  fetchError,
  onRetry,
}: FetchErrorItemProps) => {
  return (
    <li
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
        <button
          type="button"
          onClick={onRetry}
          className="w-full sm:w-56 mx-3 sm:mx-auto mt-6 py-2 text-xl border-2 border-black rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black cursor-pointer transition-transform hover:scale-110 active:scale-90"
        >
          Retry
        </button>
      )}
    </li>
  );
};

export default FetchErrorItem;
