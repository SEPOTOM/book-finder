import { useState } from 'react';
import { Provider } from 'react-redux';

import { store } from './app/store';

import SearchBooksForm from './features/books/SearchBooksForm';
import BookItemsSet from './features/books/BookItemsSet';
import LoadMoreButton from './features/books/LoadMoreButton';

import { SearchTypes } from './features/books/types';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<SearchTypes>('q');
  const [searchOffsets, setSearchOffsets] = useState<number[]>([]);

  const handleSearchFormSubmit = (newQuery: string, newType: SearchTypes) => {
    setSearchQuery(newQuery);
    setSearchType(newType);
    setSearchOffsets([0]);
  };

  return (
    <Provider store={store}>
      <header className="flex justify-center py-6 sm:py-9">
        <SearchBooksForm
          searchQuery={searchQuery}
          searchType={searchType}
          onSubmit={handleSearchFormSubmit}
        />
      </header>
      <main className="grow flex flex-col">
        {searchQuery === '' ? (
          <p className="flex justify-center items-center h-full font-light text-2xl mob:text-3xl italic">
            Search results will be here
          </p>
        ) : (
          <>
            <ul className="grow flex flex-wrap">
              {searchOffsets.map((searchOffset) => (
                <BookItemsSet
                  searchQuery={searchQuery}
                  searchType={searchType}
                  offset={searchOffset}
                  key={searchOffset}
                />
              ))}
              <li></li>
            </ul>
            <LoadMoreButton
              lastSetSearchParams={{
                query: searchQuery,
                type: searchType,
                offset: searchOffsets[searchOffsets.length - 1],
              }}
              onClick={() =>
                setSearchOffsets([...searchOffsets, searchOffsets.length])
              }
            />
          </>
        )}
      </main>
      <footer className="flex justify-center py-8">
        <p className="text-lg italic">© 2024 Book Finder</p>
      </footer>
    </Provider>
  );
};

export default App;
