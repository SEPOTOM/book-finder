import { useState } from 'react';
import { Provider } from 'react-redux';

import { store } from './app/store';

import SearchBooksForm from './features/books/SearchBooksForm';
import BooksList from './features/books/BooksList';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Provider store={store}>
      <header>
        <SearchBooksForm
          searchQuery={searchQuery}
          onSearchQueryChange={(newQuery) => setSearchQuery(newQuery)}
        />
      </header>
      <main>
        {searchQuery !== '' && <BooksList searchQuery={searchQuery} />}
      </main>
      <footer>
        <p>© 2024 Book Finder</p>
      </footer>
    </Provider>
  );
};

export default App;
