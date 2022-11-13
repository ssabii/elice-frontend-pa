import { useCallback, useMemo, useState } from "react";

import { useSearchParams } from "react-router-dom";

export interface CourseFilterParams {
  keyword?: string;
  price?: string[];
}

const useCourseFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = useMemo(
    () => searchParams.get("keyword") ?? "",
    [searchParams],
  );

  const price = useMemo(
    () => searchParams.getAll("price") ?? [],
    [searchParams],
  );

  const navigateSearch = useCallback(
    (params: CourseFilterParams) => {
      Object.entries(params).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          searchParams.delete(key);
          value.map((item) => searchParams.append(key, item));
        } else {
          value ? searchParams.set(key, value) : searchParams.delete(key);
        }
      });

      setSearchParams(searchParams, { replace: true });
    },
    [searchParams, setSearchParams],
  );

  return { keyword, price, navigateSearch };
};

export default useCourseFilter;
