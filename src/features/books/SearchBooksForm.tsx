import { ChangeEvent, FormEvent, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

import { SearchBooksFormProps, SearchTypes } from './types';

const SearchBooksForm = ({
  searchQuery,
  searchType,
  onSubmit,
}: SearchBooksFormProps) => {
  const [inputValue, setInputValue] = useState(searchQuery);
  const [selectValue, setSelectValue] = useState<SearchTypes>(searchType);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (inputValue === searchQuery && selectValue === searchType) {
      return;
    }

    onSubmit(inputValue, selectValue);
  };

  return (
    <form
      role="search"
      onSubmit={handleFormSubmit}
      className="flex items-end gap-x-2 px-3"
    >
      <input
        type="search"
        placeholder={`Search for books ${selectValue === 'q' ? '' : `by ${selectValue}`}`}
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.currentTarget.value)
        }
        className="grow min-w-72 px-2 py-1 text-xl border-2 border-black rounded-md outline-offset-4"
      />
      <select
        value={selectValue}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setSelectValue(e.currentTarget.value as SearchTypes)
        }
      >
        <option value="q">Default</option>
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>
      <button type="submit" aria-label="Search" className="pb-[2px]">
        <MagnifyingGlassIcon width={36} height={36} />
      </button>
    </form>
  );
};

export default SearchBooksForm;
