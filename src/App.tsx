import { useState } from 'react';
import { Provider } from 'react-redux';

import { store } from './app/store';

import SearchBooksForm from './features/books/SearchBooksForm';
import BooksList from './features/books/BooksList';

import { SearchTypes } from './features/books/types';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState(SearchTypes.DEFAULT);

  return (
    <Provider store={store}>
      <header className="flex justify-center py-6 sm:py-12">
        <SearchBooksForm
          searchQuery={searchQuery}
          onSearchQueryChange={(newQuery) => setSearchQuery(newQuery)}
          searchType={searchType}
          onSearchTypeChange={(newType) => setSearchType(newType)}
        />
      </header>
      <main className="grow">
        {searchQuery !== '' && (
          <BooksList searchQuery={searchQuery} searchType={searchType} />
        )}
      </main>
      <footer className="flex justify-center py-8">
        <p className="text-lg italic">© 2024 Book Finder</p>
      </footer>
    </Provider>
  );
};

export default App;
