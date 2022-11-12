import { useRecoilState, useRecoilValue } from "recoil";
import {
  keywordState,
  pageState,
  paginationState,
  priceFilterState,
} from "store/course";

const useCourse = () => {
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const [priceFilter, setPriceFilter] = useRecoilState(priceFilterState);
  const [page, setPage] = useRecoilState(pageState);
  const pagination = useRecoilValue(paginationState);

  return {
    keyword,
    priceFilter,
    page,
    pagination,
    setKeyword,
    setPriceFilter,
    setPage,
  };
};

export default useCourse;
