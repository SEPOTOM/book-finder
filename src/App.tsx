import { Provider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';

import { store } from './app/store';

import { apiSlice } from './features/api/apiSlice';

import Fallback from './app/Fallback';
import BooksLayout from './features/books/BooksLayout';

const App = () => {
  const handleErrorBoundaryReset = () => {
    store.dispatch(apiSlice.util.resetApiState());
  };

  return (
    <ErrorBoundary
      FallbackComponent={Fallback}
      onReset={handleErrorBoundaryReset}
    >
      <Provider store={store}>
        <BooksLayout />
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
