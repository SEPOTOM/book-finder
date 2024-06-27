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

    if (inputValue !== '') {
      onSubmit(inputValue, selectValue);
    }
  };

  const inputLabel = `Search for books ${selectValue === 'q' ? '' : `by ${selectValue}`}`;

  return (
    <form
      role="search"
      onSubmit={handleFormSubmit}
      className="flex flex-wrap gap-2 px-3"
    >
      <input
        type="search"
        placeholder={inputLabel}
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.currentTarget.value)
        }
        className="grow px-2 py-1 mob:min-w-[280px] text-xl border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        aria-label={inputLabel}
      />
      <select
        value={selectValue}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setSelectValue(e.currentTarget.value as SearchTypes)
        }
        className="basis-full mob:basis-auto order-1 mob:order-none px-2 py-1 text-lg bg-white border-2 border-black rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-black focus-visible:outline-none"
        aria-label="Select search type"
      >
        <option value="q">Default</option>
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>
      <button
        type="submit"
        aria-label="Search"
        className="focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black transition-transform hover:scale-110 active:scale-90"
      >
        <MagnifyingGlassIcon width={36} height={36} />
      </button>
    </form>
  );
};

export default SearchBooksForm;
