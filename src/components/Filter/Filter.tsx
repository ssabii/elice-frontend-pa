import React from "react";
import styled from "styled-components";
import FilterContent from "./FilterContent";
import FilterItem from "./FilterItem";
import FilterLabel from "./FilterLabel";

export interface FilterProps {
  children?: React.ReactNode;
}

const Filter = ({ children }: FilterProps) => <Element>{children}</Element>;

const Element = styled.div`
  border: 1px solid rgb(225, 226, 228);
`;

export default Object.assign(Filter, {
  Item: FilterItem,
  Label: FilterLabel,
  Content: FilterContent,
});
