import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

type ImageProps = {
  src: string;
  [x: string]: any;
};

const Image = ({ src, ...props }: ImageProps) => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid(quality: 90, maxWidth: 2000) {
              originalName
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  const match = data.allImageSharp.edges.find(({ node }: { node: any }) =>
    node.fluid.originalName.match(src)
  );
  const isValid = match && match.node.fluid;

  return isValid ? <Img fluid={match.node.fluid} {...props} /> : null;
};

export default Image;
