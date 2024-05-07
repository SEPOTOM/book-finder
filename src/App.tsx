import { Provider } from 'react-redux';

import { store } from './app/store';

import Header from './app/Header';
import BooksList from './app/BooksList';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <BooksList />
      </main>
    </Provider>
  );
};

export default App;
