import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";

type IconLinkProps = {
  label: string;
  className?: string;
  href: string;
  icon: IconProp;
};

const IconLink = ({ label, className, href, icon }: IconLinkProps) => {
  return (
    <a
      target="__blank"
      aria-label={label}
      title={label}
      className={className}
      href={href}
    >
      <FontAwesomeIcon aria-hidden="true" icon={icon} />
    </a>
  );
};

IconLink.defaultProps = {
  label: "Icon Link",
};

IconLink.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default IconLink;
