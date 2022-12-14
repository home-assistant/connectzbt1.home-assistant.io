module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    static: "static",
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
