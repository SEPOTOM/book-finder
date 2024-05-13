import { ChangeEvent, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

import { SearchBooksFormProps } from './types';

const SearchBooksForm = ({
  searchQuery,
  onSearchQueryChange,
}: SearchBooksFormProps) => {
  const [inputValue, setInputValue] = useState(searchQuery);

  return (
    <form role="search" className="flex items-end gap-x-2 px-3">
      <label className="flex flex-wrap items-center gap-2 font-medium text-2xl">
        Search for books:
        <input
          type="search"
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.currentTarget.value)
          }
          className="grow px-2 py-1 text-xl border-2 border-black rounded-md outline-offset-4"
        />
      </label>
      <button
        type="button"
        aria-label="Search"
        onClick={() => onSearchQueryChange(inputValue)}
        className="pb-[2px]"
      >
        <MagnifyingGlassIcon width={36} height={36} />
      </button>
    </form>
  );
};

export default SearchBooksForm;
