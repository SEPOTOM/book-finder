export interface SearchBooksResponse {
  docs: BookResponse[];
}

export interface BookResponse {
  author_name: string[];
  cover_edition_key: string;
  key: string;
  publish_date: string[];
  title: string;
}
