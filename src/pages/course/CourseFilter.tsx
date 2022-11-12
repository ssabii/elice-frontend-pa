import React, { useCallback } from "react";

import Chip from "components/Chip";
import Filter from "components/Filter";
import SearchInput from "components/SearchInput";
import useCourse from "hooks/course/useCourse";
import styled from "styled-components";

const CourseFilter = () => {
  const { keyword, priceFilter, setKeyword, setPriceFilter } = useCourse();

  const handleKeywordChange = useCallback(
    (value: string) => {
      setKeyword(value);
    },
    [setKeyword],
  );

  const handlePriceClick = useCallback(
    (label: string) => () => {
      const newPriceFilter = priceFilter.map((item) => {
        return item.label === label
          ? { ...item, isSelected: !item.isSelected }
          : item;
      });

      setPriceFilter(newPriceFilter);
    },
    [priceFilter, setPriceFilter],
  );

  return (
    <Container>
      <SearchInput
        placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
        value={keyword}
        onChange={handleKeywordChange}
      />
      <Filter>
        <Filter.Item>
          <Filter.Label>가격</Filter.Label>
          <Filter.Content>
            {priceFilter.map(({ label, isSelected }) => (
              <Chip
                key={label}
                variant={isSelected ? "primary" : "default"}
                onClick={handlePriceClick(label)}
              >
                {label}
              </Chip>
            ))}
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
