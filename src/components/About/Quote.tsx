import useFetch from "@src/hooks/useFetch";
import React from "react";
import styled from "styled-components";

const QuoteWrapper = styled.article`
  position: relative;

  font-size: 12px;
  padding: 20px;
  padding-bottom: 30px;
  margin: 20px 10px;

  border-radius: 10px;
  min-width: 200px;
  flex: 1;

  background-color: ${p =>
    p.theme.dark ? p.theme.accentColor : p.theme.secondaryColor};
  box-shadow: ${props => props.theme.shadowSmall};

  &,
  p {
    color: ${p => (p.theme.dark ? p.theme.primaryText : p.theme.primaryColor)};
  }

  i {
    position: absolute;
    bottom: 20px;
    right: 20px;
    float: right;
  }
`;
author: "Epictetus";
authorSlug: "epictetus";
content: "Difficulties are things that show a person what they are.";
length: 57;
tags: ["famous-quotes"];

type QuoteData = {
  author: string;
  authorSlug: string;
  content: string;
};

const Quote = () => {
  const quote = useFetch<QuoteData>({
    url: "https://api.quotable.io/random?maxLength=90",
  });

  return (
    <QuoteWrapper>
      {quote && (
        <>
          <p>“{quote.content}“</p>
          <br />
          <i>- {quote.authorSlug}</i>
        </>
      )}
    </QuoteWrapper>
  );
};

export default Quote;
