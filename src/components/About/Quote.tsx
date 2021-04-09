import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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

type QuoteProps = {
  content: string;
  authorSlug: string;
};

const Quote = ({ content, authorSlug }: QuoteProps) => {
  return (
    <QuoteWrapper>
      <p>“{content}“</p>
      <br />
      <i>- {authorSlug}</i>
    </QuoteWrapper>
  );
};

Quote.propTypes = {
  content: PropTypes.string,
  authorSlug: PropTypes.string,
};

export default Quote;
