export const ITEMS_PER_PAGE = 24;
export const POSTS_PER_CATEGORY = 5;
export const EXCERPT_LENGTH = 50;

export function setQueryParams(url: URL, query: { [key: string]: string}): void {
  if (query && typeof query === 'object') {
    Object.keys(query).forEach(k => query[k] && url.searchParams.set(k, query[k]));
  }
}
