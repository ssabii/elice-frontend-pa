import React from "react";

import styled from "styled-components";

export interface CourseListResultProps {
  message: string;
}

const CourseListResult = ({ message }: CourseListResultProps) => {
  return (
    <Container>
      <TopSpace />
      <Icon src="empty_icon.png"></Icon>
      <MiddleSpace />
      <Message>{message}</Message>
    </Container>
  );
};

export default CourseListResult;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;

const TopSpace = styled.div`
  display: block;
  width: 0px;
  height: 0px;
  margin: 0px 0px 7.5rem;
  padding: 0px;
`;

const MiddleSpace = styled.div`
  display: block;
  width: 0px;
  height: 0px;
  margin: 0px 0px 1.5rem;
  padding: 0px;
`;

const Icon = styled.img`
  width: 64px;
  height: 64px;
`;

const Message = styled.div`
  font-size: 16px;
  color: #999;
  white-space: pre-wrap;
`;
