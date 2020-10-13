import React from "react";
import styled from "styled-components";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { Header } from "./Header";

const AppStyled = styled.main`
  width: 540px;
  margin: 0 auto;
`;
export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <AppStyled>
      <Header siteTitle={title} siteDescription={description} />
      {children}
    </AppStyled>
  );
};
