import { useRecoilState } from "recoil";
import { keywordState, pageState, priceFilterState } from "store/course";

const useCourse = () => {
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const [priceFilter, setPriceFilter] = useRecoilState(priceFilterState);
  const [page, setPage] = useRecoilState(pageState);

  return {
    keyword,
    priceFilter,
    page,
    setKeyword,
    setPriceFilter,
    setPage,
  };
};

export default useCourse;
