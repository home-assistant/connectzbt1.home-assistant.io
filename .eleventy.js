const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
  eleventyConfig.addPassthroughCopy({
    "public/images": "images",
    "public/css": "css",
    "public/resources": "resources",
    "public/firmwares": "firmwares",
    "public/_redirects": "_redirects",
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
  };
};
