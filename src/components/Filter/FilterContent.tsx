import React from "react";

import styled from "styled-components";

export interface FilterContentProps {
  children?: React.ReactNode;
}

const FilterContent = ({ children }: FilterContentProps) => {
  return <Element>{children}</Element>;
};

export default FilterContent;

const Element = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px;
  -webkit-box-align: center;
  align-items: center;
  gap: 16px;
`;
