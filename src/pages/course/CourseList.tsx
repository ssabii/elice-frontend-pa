import React, { useCallback } from "react";

import Pagination from "components/Pagination";
import useCourse from "hooks/course/useCourse";
import styled from "styled-components";

import CourseCard from "./CourseCard";

const CourseList = () => {
  const { page, pagination, setPage } = useCourse();
  const { count, totalCount } = page;
  const { current, last } = pagination;

  const handlePageChange = useCallback(
    (value: number) => {
      setPage({
        ...page,
        offset: (value - 1) * count,
      });
    },
    [page, count, setPage],
  );

  return (
    <Container>
      <CountWrapper>
        <Count>전체 {totalCount}개</Count>
      </CountWrapper>
      <CourseCardContainer>
        <CourseCard
          label="무료"
          title="캐글 문제로 배우는 R 데이터 분석"
          description="실전 캐글 대회 문제로 익히는 R 데이터 분석!"
          src="https://cdn-api.elice.io/api/file/09a0fa8235df42a5976316b97b6dcd56/%E1%84%8F%E1%85%A2%E1%84%80%E1%85%B3%E1%86%AF_R_%E1%84%83%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%90%E1%85%A5%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8%402x.png?se=2022-11-24T00%3A15%3A00Z&sp=rt&sv=2020-10-02&sr=b&sig=kphFGTdB3SFYx0F3UP5d1iwpy9AQKEs255sYWPM5D8A%3D"
        />
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
