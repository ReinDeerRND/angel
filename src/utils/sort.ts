export const sortByTitle = (a: { title: string }, b: { title: string }) =>
  a.title > b.title ? 1 : -1;

export const sortByBody = (a: { body: string }, b: { body: string }) =>
  a.body > b.body ? 1 : -1;

export const sortByIndex = (a: { id: number }, b: { id: number }) =>
  a.id > b.id ? 1 : -1;

export const sortByIser = (a: { userId: number }, b: { userId: number }) =>
  a.userId > b.userId ? 1 : -1;
