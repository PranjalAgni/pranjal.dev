import React, { ReactChild, ReactNode } from "react";
import Link from "gatsby-link";
import { Link as SLink } from "react-scroll";

type NavLinkProps = {
  NavItem: any;
};

const NavItemsSmoothLinks = ({ NavItem }: NavLinkProps) => (
  <>
    <NavItem>
      <SLink smooth offset={-70} hashSpy to="home">
        home
      </SLink>
    </NavItem>
    <NavItem>
      <SLink smooth offset={-100} hashSpy to="about">
        about me
      </SLink>
    </NavItem>
    <NavItem>
      <SLink smooth offset={-100} hashSpy to="projects">
        projects
      </SLink>
    </NavItem>
    <NavItem>
      <SLink smooth offset={-100} hashSpy to="contact">
        contact
      </SLink>
    </NavItem>
  </>
);

const NavItemsGatsbyLinks = ({ NavItem }: NavLinkProps) => (
  <>
    <NavItem>
      <Link to="/">home</Link>
    </NavItem>
    <NavItem>
      <Link to="/#about">about me</Link>
    </NavItem>
    <NavItem>
      <Link to="/#projects">projects</Link>
    </NavItem>
    <NavItem>
      <Link to="/#contact">contact</Link>
    </NavItem>
  </>
);

const NavLinks = React.memo(({ NavItem }: NavLinkProps) => {
  let path = null;
  if (typeof window !== "undefined") {
    path = window.location.pathname;
  }

  return (
    <>
      {path === "/" ? (
        <NavItemsSmoothLinks NavItem={NavItem} />
      ) : (
        <NavItemsGatsbyLinks NavItem={NavItem} />
      )}
    </>
  );
});

export default NavLinks;
