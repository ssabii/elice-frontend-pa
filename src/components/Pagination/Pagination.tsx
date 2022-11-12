import React, { useCallback, useMemo } from "react";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { getStyle } from "./style";

export interface PaginationProps {
  current: number;
  count: number;
  onPageChange?: (page: number) => void;
}

const Pagination = ({ current, count, onPageChange }: PaginationProps) => {
  if (current < 1 || count < 1) {
    throw new Error("current and count must be greater than zero");
  }

  if (current > count) {
    throw new Error("current must be less than or equal to count");
  }

  const handlePageChange = useCallback(
    (page: number) => () => {
      if (current !== page) onPageChange?.(page);
    },
    [current, onPageChange],
  );

  const handlePreviousClick = useCallback(() => {
    onPageChange?.(current - 1);
  }, [current, onPageChange]);

  const handleNextClick = useCallback(() => {
    onPageChange?.(current + 1);
  }, [current, onPageChange]);

  const pages = useMemo(() => {
    const boxes = [];
    const left = Math.max(1, current - 4);
    const right = Math.min(current + 4, count);

    for (let page = left; page <= right; page++) {
      boxes.push(
        <Box
          key={page}
          active={page === current}
          onClick={handlePageChange(page)}
        >
          {page}
        </Box>,
      );
    }

    return boxes;
  }, [current, count, handlePageChange]);

  return (
    <Container>
      <Arrow disabled={current === 1} onClick={handlePreviousClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Arrow>
      {pages}
      <Arrow disabled={current === count} onClick={handleNextClick}>
        <FontAwesomeIcon icon={faChevronRight} />
      </Arrow>
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  display: flex;
`;

const Box = styled.button<{ active?: boolean }>`
  width: 24px;
  height: 24px;
  margin: 0 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.5s ease;
  ${({ active }) => getStyle(active)};
`;

const Arrow = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin: 0 6px;
  color: #222;
  border: none;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    color: #524fa1;
  }

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;
