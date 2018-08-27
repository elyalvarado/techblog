const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Ely's tech blog", // <title>
  shortSiteTitle: "A tech blog by @elyalvarado", // <title> ending for posts and pages
  siteDescription: "A blog by @elyalvarado about technology",
  siteUrl: "https://elyalvarado.github.io",
  pathPrefix: "/blog",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Ely Alvarado",
  authorTwitterAccount: "elyalvarado",
  // info
  infoTitle: "Ely Alvarado",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "A tech blog by @elyalvarado",
  manifestShortName: "Ely's blog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.bg,
  manifestThemeColor: colors.bg,
  manifestDisplay: "standalone",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/elyalvarado" },
    { name: "twitter", url: "https://twitter.com/elyalvarado" },
    { name: "facebook", url: "http://facebook.com/ely.j.alvarado" }
  ]
};
