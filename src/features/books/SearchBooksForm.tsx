import { useId } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const SearchBooksForm = () => {
  const searchInputId = useId();

  return (
    <form role="search">
      <label htmlFor={`${searchInputId}`}>Search for books:</label>
      <input id={`${searchInputId}`} type="search" />
      <button type="button" aria-label="Search">
        <MagnifyingGlassIcon width={24} height={24} />
      </button>
    </form>
  );
};

export default SearchBooksForm;
