import { selector } from "recoil";

import { pageState } from "./atom";

export const paginationState = selector({
  key: "paginationState",
  get: ({ get }) => {
    const { offset, count, totalCount } = get(pageState);

    return {
      current: count > 0 ? Math.floor(offset / count) + 1 : 0,
      last: count > 0 ? Math.floor(totalCount / count) + 1 : 0,
    };
  },
});
