import { css } from "styled-components";

import { Variant } from "./Chip";

export const getStyle = (variant: Variant = "default") => {
  switch (variant) {
    case "primary":
      return css`
        color: rgb(249, 250, 252);
        border: 1px solid rgb(82, 79, 161);
        background: rgb(82, 79, 161);

        &:hover {
          color: rgb(240, 241, 243);
          background: rgb(66, 63, 140);
          border-color: rgb(66, 63, 140);
        }
      `;
    default:
      return css`
        color: rgb(21, 22, 24);
        border: 1px solid rgb(240, 241, 243);
        background: rgb(240, 241, 243);

        &:hover {
          color: rgb(0, 0, 0);
          background: rgb(225, 226, 228);
          border-color: rgb(225, 226, 228);
        }
      `;
  }
};
