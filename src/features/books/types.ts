export enum SearchTypes {
  DEFAULT = 'default',
  TITLE = 'title',
  AUTHOR = 'author',
}

export interface SearchBooksResponse {
  docs: BookResponse[];
}

export interface BookResponse {
  author_name?: string[];
  cover_edition_key?: string;
  key: string;
  publish_date?: string[];
  title?: string;
  id_amazon?: string[];
  id_google?: string[];
  id_librivox?: string[];
}

export interface BookItemProps {
  bookId: string;
  searchParams: SearchParams;
}

export interface BooksListProps {
  searchQuery: string;
  searchType: SearchTypes;
}

export interface SearchBooksFormProps {
  searchQuery: string;
  onSearchQueryChange: (newQuery: string) => void;
  searchType: SearchTypes;
  onSearchTypeChange: (newType: SearchTypes) => void;
}

export interface ExternalLinksListProps {
  amazonBooksId: string;
  googleBooksId: string;
  libriVoxId: string;
  openLibraryId: string;
}

export interface SearchParams {
  query: string;
  type: SearchTypes;
}
