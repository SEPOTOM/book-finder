import { Provider } from 'react-redux';

import { store } from './app/store';

import SearchBooksForm from './features/books/SearchBooksForm';
import BooksList from './features/books/BooksList';

const App = () => {
  return (
    <Provider store={store}>
      <header>
        <SearchBooksForm />
      </header>
      <main>
        <BooksList />
      </main>
      <footer>
        <p>© 2024 Book Finder</p>
      </footer>
    </Provider>
  );
};

export default App;
