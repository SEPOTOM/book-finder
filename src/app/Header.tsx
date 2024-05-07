import { useId } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const id = useId();

  return (
    <header>
      <form role="search">
        <label htmlFor={`${id}`}>Search for books:</label>
        <input id={`${id}`} type="search" />
        <button type="button" aria-label="Search">
          <MagnifyingGlassIcon width={24} height={24} />
        </button>
      </form>
    </header>
  );
};

export default Header;
