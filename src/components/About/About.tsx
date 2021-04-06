import React, { useEffect } from "react";

import SkewBg from "@common/SkewBg";
import PageHeader from "@common/PageHeader";
import Flex from "@common/Flex";

import Quote from "./Quote";
import Avatar from "./Avatar";

import { AboutWrapper, AboutInfo } from "./About.style";

const About = () => {
  return (
    <AboutWrapper id="about">
      <PageHeader>About Me</PageHeader>
      <SkewBg />
      <AboutInfo>
        <div>
          <Avatar src="personal.jpg" />
        </div>
        <p>
          Hi, I'm Pranjal Agnihotri a life long learner who loves to code and
          build things, currently working at{" "}
          <a className="about__link" href="https://www.highradius.com/">
            Highradius
          </a>{" "}
          as a FullStack engineer. I tend to make use of modern web technologies
          to build websites that look great, feel fantastic, and function
          correctly. I am especially focusing on Reactjs.
          <br />
          <br />
          I'm also a certified graphic designer from "Ramakrishna Mission
          Shilpamandira". I also do Graphic and UI designing. Since I love both
          programming and designing, I'm also interested in creating
          programmatic designs and creative coding projects.
        </p>
      </AboutInfo>

      <Flex justify="space-between" className="quotes__wrapper">
        <Quote />
        <Quote />
        <Quote />
      </Flex>
    </AboutWrapper>
  );
};

export default About;
