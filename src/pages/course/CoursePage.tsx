import React from "react";

import styled from "styled-components";

import CourseFilter from "./CourseFilter";
import CourseList from "./CourseList";

const CoursePage = () => {
  return (
    <Container>
      <CourseFilter />
      <CourseList />
    </Container>
  );
};

export default CoursePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
