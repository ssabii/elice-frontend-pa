import React, { useCallback } from "react";

import styled from "styled-components";

import { getStyle } from "./style";

export type Variant = "default" | "primary";

export interface ChipProps {
  variant?: Variant;
  onClick?: () => void;
  children: React.ReactNode;
}

const Chip = ({ variant = "default", onClick, children }: ChipProps) => {
  const handleClick = useCallback(() => {
    onClick?.();
  }, [onClick]);

  return (
    <Element variant={variant} onClick={handleClick}>
      {children}
    </Element>
  );
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
  font-weight: 400;
  transition: all 150ms ease-in-out 0s;
  cursor: pointer;
  ${({ variant }) => getStyle(variant)};
`;
