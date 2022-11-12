import React from "react";

import Chip from "components/Chip";
import Filter from "components/Filter";
import SearchInput from "components/SearchInput";
import styled from "styled-components";

const CourseFilter = () => {
  return (
    <Container>
      <SearchInput />
      <Filter>
        <Filter.Item>
          <Filter.Label>가격</Filter.Label>
          <Filter.Content>
            <Chip>무료</Chip>
            <Chip>유료</Chip>
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
