import { useState } from 'react';
import { Provider } from 'react-redux';

import { store } from './app/store';

import SearchBooksForm from './features/books/SearchBooksForm';
import BookItemsSet from './features/books/BookItemsSet';

import { SearchTypes } from './features/books/types';
import LoadMoreButton from './features/books/LoadMoreButton';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<SearchTypes>('q');
  const [offsets, setOffsets] = useState<number[]>([]);

  const handleSearchFormSubmit = (newQuery: string, newType: SearchTypes) => {
    setSearchQuery(newQuery);
    setSearchType(newType);
    setOffsets([0]);
  };

  return (
    <Provider store={store}>
      <header className="flex justify-center py-6 sm:py-12">
        <SearchBooksForm
          searchQuery={searchQuery}
          searchType={searchType}
          onSubmit={handleSearchFormSubmit}
        />
      </header>
      <main className="grow flex flex-col">
        {searchQuery === '' ? (
          <p className="flex justify-center items-center h-full font-light text-3xl italic">
            Search results will be here
          </p>
        ) : (
          <>
            <ul className="grow flex flex-wrap">
              {offsets.map((offset) => (
                <BookItemsSet
                  searchQuery={searchQuery}
                  searchType={searchType}
                  offset={offset}
                  key={offset}
                />
              ))}
              <li></li>
            </ul>
            <LoadMoreButton
              lastSetSearchParams={{
                query: searchQuery,
                type: searchType,
                offset: offsets[offsets.length - 1],
              }}
              onClick={() => setOffsets([...offsets, offsets.length])}
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
