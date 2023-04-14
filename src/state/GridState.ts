import { selectorFamily } from "recoil";

export interface GridItem {
  timeToResolve: number;
  title: string;
}

const runTimeout = (timeToResolve: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(timeToResolve);
    }, timeToResolve);
  });

export const GridItemsQuery = selectorFamily({
  key: "GridItemsQuery",
  get: (item: any) => async () => {
    console.log(item);
    const responseVal = await runTimeout(item.timeToResolve);
    return {
      title: item.title,
      responseTime: responseVal as number,
    }
  }
});