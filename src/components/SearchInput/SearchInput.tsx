import React, { ChangeEvent, useCallback, useState } from "react";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export interface SearchInputProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const SearchInput = ({ value, placeholder, onChange }: SearchInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    },
    [onChange],
  );

  return (
    <Container
      isFocused={isFocused}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <IconWrapper>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </IconWrapper>
      <InputWrapper>
        <Input
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </InputWrapper>
    </Container>
  );
};

export default SearchInput;

const Container = styled.div<{ isFocused?: boolean }>`
  display: flex;
  width: 100%;
  padding: 12px 0;
  border: 1px solid
    ${({ isFocused }) =>
      isFocused ? "rgb(82, 79, 161)" : "rgb(201, 202, 204)"};
  border-radius: 4px;
  background: white;
`;

const IconWrapper = styled.div`
  display: flex;
  margin: 0 16px;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  margin-right: 16px;
  width: 100%;
  overflow: hidden;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: 16px;
  background: transparent;
  border: none;

  :focus {
    outline: none;
  }

  ::placeholder {
    margin: 12px 0;
    font-size: 16px;
    color: gray;
  }
`;
