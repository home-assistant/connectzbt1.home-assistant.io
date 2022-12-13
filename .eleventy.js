module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy(
        { 
          "static": "static",
        }
      );

    return {
        dir: {
            input: ".",
            output: "dist",
            layouts: "layouts",
        },
        htmlTemplateEngine: "liquid",
        markdownTemplateEngine: "liquid",
    };
}