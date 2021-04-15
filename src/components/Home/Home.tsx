import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import svgRect from "@src/static/home_rect.svg";

import { HeroCard } from "./HeroCard";
import { HomeWrapper, Intro } from "./Home.style";

import IconLink from "@common/IconLink";
import PageHeader from "@common/PageHeader";
import Flex from "@common/Flex";
import Button from "@common/Button";

import { Card, CardIcon, CardText, CardTitle } from "@common/Card";

const ThingsILove = () => (
  <Flex justify="space-between" align="center">
    <Card>
      <CardIcon>
        <FontAwesomeIcon icon={"server"} />
      </CardIcon>
      <CardTitle>BackEnd</CardTitle>
      <CardText>
        I'm more back end focused and love to work with NodeJS. I like to design
        scalable systems
      </CardText>
    </Card>

    <Card>
      <CardIcon>
        <FontAwesomeIcon icon={["fab", "js"]} />
      </CardIcon>
      <CardTitle>Javascript</CardTitle>
      <CardText>
        I just extremely love javascript, I can’t even express how much I love
        javascript with just a few lines.
      </CardText>
    </Card>

    <Card>
      <CardIcon>
        <FontAwesomeIcon icon={["fab", "node"]} />
      </CardIcon>
      <CardTitle>FrontEnd</CardTitle>
      <CardText>
        ReactJS is my goto library, I love to build state heavy client side apps
        with the power of JS
      </CardText>
    </Card>
  </Flex>
);

const Home = () => {
  return (
    <HomeWrapper id="home">
      <img className="svg-rect" src={svgRect} alt=""></img>

      <Intro>
        {/* <Parallax y={[50, -50]} className="home__text"> */}
        <div className="home__text">
          <p>Hello, I’m</p>
          <h1>Pranjal Agnihotri</h1>
          <p className="adjust">Full Stack Software Developer</p>

          <div className="home__CTA">
            <Button className="cta" as="a" href="#">
              Download Resume
            </Button>

            <div className="home__social">
              <IconLink
                label="github"
                icon={["fab", "github"]}
                href="https://github.com/PranjalAgni"
              />
              <IconLink
                label="twitter"
                icon={["fab", "twitter"]}
                href="https://twitter.com/PranjalAgnihot8"
              />
              <IconLink
                label="youtube"
                icon={["fab", "youtube"]}
                href="https://www.youtube.com/channel/UCnjrxz-65-yuprx6fiErO1g"
              />
            </div>
          </div>
        </div>

        <HeroCard />
      </Intro>

      {/* Things I LOVE */}
      <PageHeader style={{ marginBottom: 30 }}>
        Things I love <i className="fas fa-heart" />
      </PageHeader>
      <ThingsILove />
    </HomeWrapper>
  );
};

export default Home;
