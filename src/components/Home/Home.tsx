import Button from "@common/Button";
import { Card, CardIcon, CardText, CardTitle } from "@common/Card";
import Flex from "@common/Flex";
import IconLink from "@common/IconLink";
import PageHeader from "@common/PageHeader";
import Image from "@components/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { doAPICall } from "@src/services/api";
import svgRect from "@src/static/home_rect.svg";
import download from "downloadjs";
import React, { SyntheticEvent } from "react";
import { HeroCard } from "./HeroCard";
import { HomeWrapper, Intro } from "./Home.style";

const ThingsILove = () => (
  <Flex justify="space-between" align="center">
    <Card>
      <CardIcon>
        <FontAwesomeIcon icon={"server"} />
      </CardIcon>
      <CardTitle>BackEnd</CardTitle>
      <CardText>
        I'm more back end focused and feel most productive with NodeJS. I focus
        on designing scalable systems
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
  const handleDownloadResume = async (event: SyntheticEvent) => {
    event.preventDefault();
    const blob = await doAPICall({
      url: `${process.env.GATSBY_API_URL}/resume/download`,
      init: {
        method: "GET",
      },
      isFile: true,
    });

    if (blob) download(blob, "PranjalAgnihotriResume");
  };

  return (
    <HomeWrapper id="home">
      <img className="svg-rect" src={svgRect} alt=""></img>

      <Intro>
        {/* <Parallax y={[50, -50]} className="home__text"> */}
        <div className="home__text">
          <p>Hello, I’m</p>
          <h1>Pranjal Agnihotri</h1>
          <div>
            <p className="adjust">
              {"Full Stack Software Developer@ "}
              <span className="company__text">{"Microsoft"}</span>
              <span>{"  "}</span>
              <span>
                <Image className="company__icon" src="ms.png" />
              </span>
            </p>
          </div>
          <div className="home__CTA">
            <Button className="cta" as="a" onClick={handleDownloadResume}>
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
