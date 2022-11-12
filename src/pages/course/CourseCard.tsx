import React from "react";

import {
  faCalendarDays,
  faChartColumn,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const iconTextItems = [
  { icon: faChartColumn, text: "난이도 : 미설정" },
  { icon: faLaptop, text: "수업 : 온라인" },
  { icon: faCalendarDays, text: "기간 : 무제한" },
];

export interface CourseCardProps {
  label: string;
  title: string;
  description: string;
  src: string;
}

const CourseCard = ({ label, title, description, src }: CourseCardProps) => {
  return (
    <Card>
      <CardHeader>
        <Label>{label}</Label>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </CardHeader>
      <CardBody>
        <IconTextContainer>
          {iconTextItems.map(({ icon, text }, index) => (
            <IconTextItem key={index}>
              <FontAwesomeIcon width="24px" icon={icon} />
              <Text>{text}</Text>
            </IconTextItem>
          ))}
          <Logo role="img" aria-label="logo" alt="logo" src={src} />
        </IconTextContainer>
      </CardBody>
    </Card>
  );
};

export default CourseCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 296px;
  height: 338px;
  padding: 28px 24px;
  border-radius: 8px;
  background-color: white;
`;

const CardHeader = styled.div``;

const CardBody = styled.div``;

const Label = styled.div`
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: bold;
  color: #524fa1;
`;

const Title = styled.div`
  display: -webkit-box;
  height: 58px;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.6;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #222;
`;

const Description = styled.div`
  display: -webkit-box;
  font-size: 14px;
  line-height: 1.6;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #5e5f61;
`;

const IconTextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const IconTextItem = styled.div`
  display: flex;
  gap: 8px;
  height: 28px;
  align-items: center;
`;

const Text = styled.div`
  font-size: 12px;
  color: #7d7e80;
`;

const Logo = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 52px;
  height: 52px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;
