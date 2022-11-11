import React from "react";
import styled from "styled-components";
import { getStyle } from "./style";

export type Variant = "default" | "primary";

export interface ChipProps {
  variant?: Variant;
  children: React.ReactNode;
}

const Chip = ({ variant = "default", children }: ChipProps) => {
  return <Element variant={variant}>{children}</Element>;
};

export default Chip;

const Element = styled.span<{ variant: Variant }>`
  display: inline-flex;
  align-items: center;
  margin: 0px;
  padding: 4px 12px;
  min-width: 30px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  transition: all 150ms ease-in-out 0s;
  cursor: pointer;
  ${({ variant }) => getStyle(variant)};
`;
