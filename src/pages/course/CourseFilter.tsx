import React, { useCallback, useMemo, useState } from "react";

import Chip from "components/Chip";
import Filter from "components/Filter";
import SearchInput from "components/SearchInput";
import useCourseFilter from "hooks/course";
import { debounce } from "lodash-es";
import styled from "styled-components";

const DEBOUNCE_DELAY = 300;

const priceItems = [
  { label: "무료", value: "free" },
  { label: "유료", value: "paid" },
];

const CourseFilter = () => {
  const { keyword, price, navigateSearch } = useCourseFilter();
  const [value, setValue] = useState(keyword);

  const debouncedSearch = useMemo(
    () =>
      debounce((value) => {
        navigateSearch({ keyword: value });
      }, DEBOUNCE_DELAY),
    [navigateSearch],
  );

  const handleKeywordChange = useCallback(
    (value: string) => {
      setValue(value);
      debouncedSearch(value);
    },
    [debouncedSearch],
  );

  const handlePriceClick = useCallback(
    (value: string) => () => {
      const newPrice = price.includes(value)
        ? price.filter((item) => item !== value)
        : [...price, value];
      navigateSearch({ price: newPrice });
    },
    [price, navigateSearch],
  );

  return (
    <Container>
      <SearchInput
        placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
        value={value}
        onChange={handleKeywordChange}
      />
      <Filter>
        <Filter.Item>
          <Filter.Label>가격</Filter.Label>
          <Filter.Content>
            {priceItems.map(({ label, value }) => {
              const active = price.includes(value);

              return (
                <Chip
                  key={value}
                  variant={active ? "primary" : "default"}
                  onClick={handlePriceClick(value)}
                >
                  {label}
                </Chip>
              );
            })}
          </Filter.Content>
        </Filter.Item>
      </Filter>
    </Container>
  );
};

export default CourseFilter;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
