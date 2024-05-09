import { ChangeEvent, useId, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

import { SearchBooksFormProps } from './types';

const SearchBooksForm = ({
  searchQuery,
  onSearchQueryChange,
}: SearchBooksFormProps) => {
  const [inputValue, setInputValue] = useState(searchQuery);

  const inputId = useId();

  return (
    <form role="search" className="flex items-center gap-x-2">
      <label htmlFor={inputId} className="font-medium text-2xl">
        Search for books:
      </label>
      <input
        id={inputId}
        type="search"
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.currentTarget.value)
        }
        className="px-2 py-1 text-xl border-2 border-black rounded-md outline-offset-4"
      />
      <button
        type="button"
        aria-label="Search"
        onClick={() => onSearchQueryChange(inputValue)}
      >
        <MagnifyingGlassIcon width={36} height={36} />
      </button>
    </form>
  );
};

export default SearchBooksForm;
