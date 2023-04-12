import { atom, selectorFamily } from "recoil";

export interface GridItem {
  timeToResolve: number;
  title: string;
  resolvedValue: string,
}

const defaultGridItems = [
  { title: 'Item #1', timeToResolve: 1000 },
  { title: 'Item #2', timeToResolve: 10000 },
  { title: 'Item #3', timeToResolve: 2000 },
  { title: 'Item #4', timeToResolve: 6000 },
  { title: 'Item #5', timeToResolve: 4000 },
  { title: 'Item #6', timeToResolve: 6000 },
  { title: 'Item #7', timeToResolve: 7000 },
]

const runTimeout = (timeToResolve: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(`resolved after ${timeToResolve}ms`);
    }, timeToResolve);
  });

export const GridItemsState = atom({
  key: "GridItemsState",
  default: defaultGridItems,
});

export const GridItemsQuery = selectorFamily({
  key: "GridItemsQuery",
  get: (index: number) => async ({ get }) => {
    const item = get(GridItemsState)[index];
    const responseVal = await runTimeout(item.timeToResolve);
    return {
      title: item.title,
      response: responseVal as string,
    }
  }
});