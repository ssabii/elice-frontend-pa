import React, { useCallback, useEffect, useMemo, useState } from "react";

import Pagination from "components/Pagination";
import useCourseFilter from "hooks/course/useCourseFilter";
import useCourses from "queries/course/useCourses";
import styled from "styled-components";

import CourseCard from "./CourseCard";

const DEFAULT_COUNT = 20;

const CourseList = () => {
  const [offset, setOffset] = useState(0);
  const { keyword, price } = useCourseFilter();
  const { data, isLoading } = useCourses({
    params: { keyword, price },
    offset,
    count: DEFAULT_COUNT,
  });

  const current = useMemo(
    () => Math.floor(offset / DEFAULT_COUNT) + 1,
    [offset],
  );
  const totalCount = useMemo(() => data?.totalCount ?? 0, [data]);
  const last = useMemo(
    () => Math.ceil(totalCount / DEFAULT_COUNT),
    [totalCount],
  );

  const handlePageChange = useCallback(
    (value: number) => {
      const newOffset = (value - 1) * DEFAULT_COUNT;
      setOffset(newOffset);
    },
    [setOffset],
  );

  useEffect(() => {
    setOffset(0);
  }, [keyword, price]);

  return (
    <Container>
      <CountWrapper>
        <Count>전체 {totalCount}개</Count>
      </CountWrapper>
      <CourseCardContainer>
        {isLoading
          ? null
          : data?.courses.map(({ id, label, title, description, src }) => {
              return (
                <CourseCard
                  key={id}
                  label={label}
                  title={title}
                  description={description}
                  src={src}
                />
              );
            })}
      </CourseCardContainer>
      {totalCount > 0 && (
        <PaginationWrapper>
          <Pagination
            current={current}
            last={last}
            onPageChange={handlePageChange}
          />
        </PaginationWrapper>
      )}
    </Container>
  );
};

export default CourseList;

const Container = styled.div``;

const CountWrapper = styled.div`
  margin-bottom: 12px;
  padding: 12px 0;
  border-bottom: 1px solid rgb(225, 226, 228);
`;

const Count = styled.div`
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  color: #222;
`;

const CourseCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 16px;
`;

const PaginationWrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin-top: 24px;
`;
