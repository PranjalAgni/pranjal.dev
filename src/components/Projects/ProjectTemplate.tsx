import React, { ReactNode } from "react";
import PropTypes from "prop-types";

import {
  ProjectContent,
  ProjectDetail,
  ProjectWrapper,
} from "./ProjectTemplate.style";

type ProjectTemplateProps = {
  title: string;
  desc: string;
  links: ReactNode;
  preview: ReactNode;
};

const ProjectTemplate = ({
  title,
  desc,
  links,
  preview,
}: ProjectTemplateProps) => {
  return (
    <ProjectWrapper>
      <ProjectContent>
        <ProjectDetail>
          <div className="project__detail-container">
            <h2>{title}</h2>
            <p>{desc}</p>
            {links}
          </div>
        </ProjectDetail>

        {preview}
      </ProjectContent>
    </ProjectWrapper>
  );
};

ProjectTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  links: PropTypes.node.isRequired,
  preview: PropTypes.node.isRequired,
};

export default ProjectTemplate;
