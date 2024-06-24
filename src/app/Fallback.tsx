import { FallbackProps } from 'react-error-boundary';

import Button from '../features/books/Button';

const Fallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div
      role="alert"
      className="flex flex-col justify-center items-center gap-y-4 h-full p-3 md:p-6"
    >
      <p className="font-bold text-xl md:text-3xl text-center">
        An unexpected error has occurred!
      </p>
      <p className="text-lg md:text-xl text-center">
        <span className="font-bold">Error message:</span>{' '}
        {error instanceof Error ? error.message : String(error)}
      </p>
      <Button onClick={resetErrorBoundary} className="w-56">
        Try again
      </Button>
    </div>
  );
};

export default Fallback;
