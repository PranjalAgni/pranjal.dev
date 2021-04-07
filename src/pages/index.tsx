import React from "react";

import Layout from "@components/Layout/Layout";
import SEO from "@components/seo";
import Home from "@src/components/Home/Home";
import About from "@src/components/About/About";
import Skills from "@src/components/Skills/Skills";
import Projects from "@src/components/Projects/Projects";

const IndexPage = () => (
  <Layout>
    <SEO title="Pranjal Agnihotri" />
    <Home />
    <About />
    <Skills />
    <Projects />
  </Layout>
);

export default IndexPage;