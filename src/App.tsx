import { Provider } from 'react-redux';

import { store } from './app/store';

import Header from './app/Header';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
};

export default App;
