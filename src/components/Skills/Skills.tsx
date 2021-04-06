import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Flex from "@src/components/common/Flex";
import PageHeader from "@src/components/common/PageHeader";
import React from "react";
import { Hidden } from "react-grid-system";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import styled from "styled-components";

const SkillsWrapper = styled.section`
  ${props => props.theme.spacing.sectionBottom};
  position: relative;
  .skill__icons {
    padding: 30px 0;
    @media ${props => props.theme.media.tablet} {
      padding: 10px 0;
    }

    svg {
      color: ${props => props.theme.primaryColor};
    }
  }
  .skills__word-clouds {
    @media ${props => props.theme.media.tablet} {
      display: none;
    }

    p {
      position: absolute;
      color: ${props => props.theme.accentColor};
      z-index: -1;
      left: 0;
      right: 0;
      font-weight: 900;
    }
    z-index: -1;
  }
`;

const WordClouds = () => {
  return (
    <Parallax
      y={["-350px", "-150px"]}
      aria-hidden="true"
      className="skills__word-clouds"
    >
      <p style={{ top: 50, left: "100%", fontSize: 23 }}>JS</p>
      <p style={{ top: 0, left: 0, fontSize: 25 }}>Database</p>
      <p style={{ top: 200, left: -60, fontSize: 14 }}>Cloud</p>
      <p style={{ top: "30%", left: "35%", fontSize: 18 }}>APIs</p>
      <p style={{ top: 40, left: "75%", fontSize: 12 }}>NodeJS</p>
      <p style={{ top: 380, left: "85%", fontSize: 18 }}>SQL</p>
      <p style={{ top: 320, left: "65%", fontSize: 18 }}>React</p>
      <p style={{ top: 350, left: 150, fontSize: 20 }}>ES6</p>
      <p style={{ top: 120, left: "22%", fontSize: 12 }}>Docker</p>
    </Parallax>
  );
};

const Skills = () => (
  <SkillsWrapper>
    <ParallaxProvider>
      <PageHeader>My Skillsets</PageHeader>

      <Flex className="skill__icons" justify="space-around" align="center">
        <FontAwesomeIcon icon={["fab", "js"]} size="5x" />
        <FontAwesomeIcon icon={["fab", "react"]} size="5x" />
        <FontAwesomeIcon icon={["fab", "node"]} size="5x" />
        <FontAwesomeIcon icon={"database"} size="5x" />
      </Flex>

      <Hidden md xs sm>
        <WordClouds />
      </Hidden>
    </ParallaxProvider>
  </SkillsWrapper>
);

export default Skills;
