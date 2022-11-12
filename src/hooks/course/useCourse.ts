import { useRecoilState } from "recoil";
import { keywordState, paginationState, priceFilterState } from "store/course";

const useCourse = () => {
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const [priceFilter, setPriceFilter] = useRecoilState(priceFilterState);
  const [pagination, setPagination] = useRecoilState(paginationState);

  return {
    keyword,
    priceFilter,
    pagination,
    setKeyword,
    setPriceFilter,
    setPagination,
  };
};

export default useCourse;
