import { ChangeEvent, FormEvent, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

import { SearchBooksFormProps, SearchTypes } from './types';

const SearchBooksForm = ({
  searchQuery,
  onSearchQueryChange,
  searchType,
  onSearchTypeChange,
}: SearchBooksFormProps) => {
  const [inputValue, setInputValue] = useState(searchQuery);
  const [selectValue, setSelectValue] = useState<SearchTypes>(searchType);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSearchQueryChange(inputValue);
    onSearchTypeChange(selectValue);
  };

  return (
    <form
      role="search"
      onSubmit={handleFormSubmit}
      className="flex items-end gap-x-2 px-3"
    >
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
      <select
        value={selectValue}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setSelectValue(e.currentTarget.value as SearchTypes)
        }
      >
        <option value={SearchTypes.DEFAULT}>Default</option>
        <option value={SearchTypes.TITLE}>Title</option>
        <option value={SearchTypes.AUTHOR}>Author</option>
      </select>
      <button type="submit" aria-label="Search" className="pb-[2px]">
        <MagnifyingGlassIcon width={36} height={36} />
      </button>
    </form>
  );
};

export default SearchBooksForm;
