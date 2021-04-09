import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PageHeader from "@common/PageHeader";
import IFrame from "@common/IFrame";
import Button, { IconButton } from "@common/Button";

import SmallProjects from "./SmallProjects";

import ProjectTemplate from "./ProjectTemplate";
import { ProjectLinks, ProjectPreview, Tags } from "./ProjectTemplate.style";

const ProjectsWrapper = styled.section`
  ${props => props.theme.spacing.sectionBottom};
`;

const Projects = () => {
  const projects = useStaticQuery(
    graphql`
      query {
        allPinnedRepos {
          edges {
            node {
              id
              repo
              link
              language
              description
            }
          }
        }
      }
    `
  );

  return (
    <ProjectsWrapper id="projects" style={{ marginBottom: 100 }}>
      <PageHeader>Side Projects</PageHeader>

      {projects.allPinnedRepos.edges.map(({ node }: { node: any }) => (
        <ProjectTemplate
          key={node.id}
          title={node.repo}
          desc={node.description}
          links={
            <ProjectLinks>
              {/* <Button target="__blank" as="a" href={node.link}>
                Live Demo
              </Button> */}
              <IconButton
                label="github"
                icon={["fab", "github"]}
                href={node.link}
              />
            </ProjectLinks>
          }
          preview={
            <ProjectPreview>
              <IFrame
                livedemo={!!node.link.match("codepen")}
                src={node.link.replace("github", "github1s")}
              />
              <Tags>
                <FontAwesomeIcon icon={["fab", "js"]} />
                <FontAwesomeIcon icon={["fab", "react"]} />
                <FontAwesomeIcon icon={["fab", "node"]} />
              </Tags>
            </ProjectPreview>
          }
        />
      ))}

      <SmallProjects />
    </ProjectsWrapper>
  );
};

export default Projects;
