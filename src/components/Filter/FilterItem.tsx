import styled from "styled-components";

const FilterItem = styled.div`
  display: flex;
  background-color: rgb(255, 255, 255);

  :not(:last-of-type) {
    border-bottom: 1px solid rgb(225, 226, 228);
  }
`;

export default FilterItem;
