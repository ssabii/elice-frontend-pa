import { selector } from "recoil";

import { pageState } from "./atom";

export const paginationState = selector({
  key: "paginationState",
  get: ({ get }) => {
    const { offset, count, totalCount } = get(pageState);

    return {
      current: Math.round(offset / count) + 1,
      count: Math.round(totalCount / count),
    };
  },
});
