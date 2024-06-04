import { ExternalLinkProps } from './types';

const ExternalLink = ({ children, href }: ExternalLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-medium italic text-blue-900 visited:text-purple-600 underline focus:rounded-sm focus:outline-2 focus:outline-offset-4 focus:outline-blue-900 visited:focus:outline-purple-600"
    >
      {children}
    </a>
  );
};

export default ExternalLink;
