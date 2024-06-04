import { FallbackProps } from 'react-error-boundary';

const Fallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-4 h-full p-3 md:p-6">
      <h1 className="font-bold text-xl md:text-3xl text-center">
        An unexpected error has occurred!
      </h1>
      <p className="text-lg md:text-xl text-center">
        <span className="font-bold">Error message:</span>{' '}
        {error instanceof Error ? error.message : String(error)}
      </p>
      <button
        type="button"
        onClick={resetErrorBoundary}
        className="p-2 text-lg md:text-xl border-2 border-black rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black cursor-pointer transition-transform hover:scale-110 active:scale-90"
      >
        Try again
      </button>
    </div>
  );
};

export default Fallback;
