import { css } from "styled-components";

const hover = css`
  &:hover {
    color: #524fa1;
    background-color: #efeff6;
    font-weight: 700;
  }
`;

export const getStyle = (active?: boolean) => {
  if (active) {
    return css`
      color: white;
      background-color: #524fa1;
      ${hover}
    `;
  } else {
    return css`
      color: #999;
      ${hover}
    `;
  }
};
