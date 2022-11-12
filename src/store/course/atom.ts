import { PriceFilter } from "models/course";
import { atom } from "recoil";

export const keywordState = atom({
  key: "keywordState",
  default: "",
});

export const priceFilterState = atom<PriceFilter[]>({
  key: "priceFilterState",
  default: [
    { label: "무료", enrollType: 0, isFree: true, isSelected: false },
    { label: "유료", enrollType: 0, isFree: false, isSelected: false },
  ],
});

export const pageState = atom({
  key: "pageState",
  default: {
    offset: 0,
    count: 0,
    totalCount: 0,
  },
});
