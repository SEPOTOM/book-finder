export interface SearchBooksResponse {
  docs: BookResponse[];
}

export interface BookResponse {
  author_name?: string[];
  cover_edition_key?: string;
  key: string;
  publish_date?: string[];
  title?: string;
}

export interface BookItemProps {
  bookId: string;
  searchQuery: string;
}

export interface BooksListProps {
  searchQuery: string;
}

export interface SearchBooksFormProps {
  searchQuery: string;
  onSearchQueryChange: (newQuery: string) => void;
}
