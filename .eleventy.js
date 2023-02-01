module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "public/images": "images",
    "public/css": "css",
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
