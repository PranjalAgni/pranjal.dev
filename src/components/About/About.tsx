import Flex from "@common/Flex";
import PageHeader from "@common/PageHeader";
import SkewBg from "@common/SkewBg";
import useFetch from "@src/hooks/useFetch";
import React from "react";
import { AboutInfo, AboutWrapper } from "./About.style";
import Avatar from "./Avatar";
import Quote from "./Quote";

const About = () => {
  type QuoteData = {
    author: string;
    authorSlug: string;
    content: string;
  };

  const quoteList = useFetch<QuoteData[]>({
    url:
      "https://pranjaldev-api-production.up.railway.app/api/quotes/random?limit=3&maxLength=90",
    processData: data => data?.result?.quotes,
  });

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
        {quoteList?.map((quote, idx) => (
          <Quote
            key={idx}
            content={quote.content}
            authorSlug={quote.authorSlug}
          />
        ))}
      </Flex>
    </AboutWrapper>
  );
};

export default About;
