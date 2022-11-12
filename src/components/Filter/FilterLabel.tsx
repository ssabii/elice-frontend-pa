import React from "react";

import styled from "styled-components";

export interface FilterLabelProps {
  children?: React.ReactNode;
}

const FilterLabel = ({ children }: FilterLabelProps) => {
  return (
    <Wrapper>
      <Label>{children}</Label>
    </Wrapper>
  );
};

export default FilterLabel;

const Wrapper = styled.div`
  display: flex;
  padding: 14px 16px;
  min-width: 96px;
  width: 6px;
  background-color: rgb(249, 250, 252);
  border-right: 1px solid rgb(225, 226, 228);
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.5;
  color: #5e5f61;
`;
