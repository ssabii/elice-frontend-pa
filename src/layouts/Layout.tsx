import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default Layout;

const Header = styled.header`
  position: sticky;
  top: 0px;
  left: 0px;
  padding: 0px 24px;
  width: 100%;
  height: 64px;
  z-index: 970;
  display: flex;
  align-items: center;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 8px 0px;
  border-bottom: 1px solid rgb(240, 241, 243);
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 64px);
  background-color: rgb(240, 241, 243);
`;
