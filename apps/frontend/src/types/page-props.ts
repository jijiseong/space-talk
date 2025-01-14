export type SearchParams<T extends string> = Promise<{
  [key in T]: string | string[] | undefined;
}>;
