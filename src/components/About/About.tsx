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
          as a FullStack engineer. I love to experiment and learn new things. I
          love backend development, and read about design patterns
          <br />
          <br />
          I'm also into opensource, you can follow me on Github, to get updates
          on my new projects
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
