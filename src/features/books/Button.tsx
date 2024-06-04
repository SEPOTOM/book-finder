import clsx from 'clsx';
import { ButtonProps } from './types';

const Button = ({ children, onClick, className = '' }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'mx-3 sm:mx-auto py-2 text-xl border-2 border-black rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black cursor-pointer transition-transform hover:scale-110 active:scale-90',
        {
          [className]: Boolean(className),
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
