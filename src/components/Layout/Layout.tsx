import Wrapper from "@common/Wrapper";
import "@components/fontlib";
import Navbar from "@components/Navbar/Navbar";
import useDarkMode from "@hooks/useDarkMode";
import "normalize.css";
import PropTypes from "prop-types";
import React, { ReactElement } from "react";
import { setConfiguration } from "react-grid-system";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import Footer from "./Footer";
import { getThemeObject, Theme } from "./theme";
import ThemeToggleContext from "./ThemeToggleContext";

setConfiguration({ breakpoints: [576, 769, 992, 1200] });

type LayoutProps = {
  children: ReactElement | ReactElement[];
};

const RootWrapper = styled(Wrapper)`
  margin-top: 100px;
  margin-bottom: 50px;
  min-height: calc(100vh - 125px);

  @media ${props => props.theme.media.tablet} {
    margin-top: 50px;
  }
`;

const Layout = ({ children }: LayoutProps) => {
  const [theme, toggleTheme] = useDarkMode();

  const currentThemeObject = getThemeObject(theme as Theme);

  console.log("Theme Object: ", currentThemeObject);

  return (
    <ThemeProvider theme={currentThemeObject}>
      <>
        <GlobalStyle />

        <ThemeToggleContext.Provider value={{ theme, toggleTheme }}>
          <Navbar />
        </ThemeToggleContext.Provider>

        <RootWrapper>{children}</RootWrapper>

        <Footer />
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
