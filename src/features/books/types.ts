import { ReactNode } from 'react';

export type SearchTypes = 'q' | 'title' | 'author';

export interface SearchBooksResponse {
  docs: BookResponse[];
}

export interface BookResponse {
  author_name?: string[];
  author_alternative_name?: string[];
  cover_edition_key?: string;
  key: string;
  publish_date?: string[];
  title?: string;
  id_amazon?: string[];
  id_google?: string[];
  id_librivox?: string[];
  first_publish_year?: number;
}

export interface BookItemProps {
  book: BookResponse;
  searchParams: SearchParams;
}

export interface BookItemsSetProps {
  searchQuery: string;
  searchType: SearchTypes;
  offset: number;
}

export interface SearchBooksFormProps {
  searchQuery: string;
  searchType: SearchTypes;
  onSubmit: (newQuery: string, newType: SearchTypes) => void;
}

export interface ExternalLinksListProps {
  amazonBooksId: string;
  googleBooksId: string;
  libriVoxId: string;
  openLibraryId: string;
}

export interface LoadMoreButtonProps {
  lastLoadedBooksQuantity: number;
  areBooksLoading: boolean;
  onClick: () => void;
}

export interface ExternalLinkProps {
  children: ReactNode;
  href: string;
}

export interface FetchErrorMessageProps {
  offset: number;
  fetchError: FetchError;
  onRetry: () => void;
}

export interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

export interface SearchParams {
  query: string;
  type: SearchTypes;
  offset: number;
}

export interface FetchError {
  status?: string;
  error?: string;
}
