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
    <form role="search">
      <label htmlFor={`${inputId}`}>Search for books:</label>
      <input
        id={`${inputId}`}
        type="search"
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.currentTarget.value)
        }
      />
      <button
        type="button"
        aria-label="Search"
        onClick={() => onSearchQueryChange(inputValue)}
      >
        <MagnifyingGlassIcon width={24} height={24} />
      </button>
    </form>
  );
};

export default SearchBooksForm;
