import { Provider } from 'react-redux';

import { store } from './app/store';

import Header from './app/Header';
import BooksList from './features/books/BooksList';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
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
