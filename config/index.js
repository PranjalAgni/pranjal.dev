require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const meta = {
  siteTitle: "Pranjal Agnihotri - FullStack Developer",
  siteDescription: "Pranjal Agnihotri - Loves to build blazing fast softwares",
  siteTitleAlt: "Pranjal Agnihotri",
  siteShortName: "Pranjal Agnihotri",
  siteUrl: "https://pranjal.me/", // No trailing slash!
};

const social = {
  siteLogo: `src/static/logo.svg`,
  twitter: "@PranjalAgnihot8",
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  trackingId: process.env.GOOGLE_ANALYTICS_ID,
};

module.exports = {
  website: {
    ...meta,
    ...social,
    themeColor: "#6D83F2",
    backgroundColor: "#6D83F2",
  },
};
