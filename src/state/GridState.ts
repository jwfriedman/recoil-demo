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
    const responseImg = await fetch('https://cataas.com/cat?type=sq');
    await runTimeout(item.timeToResolve);
    const catImage = await responseImg.blob();
    return {
      title: item.title,
      timeToResolve: item.timeToResolve,
      catImage,
    };
  }
});