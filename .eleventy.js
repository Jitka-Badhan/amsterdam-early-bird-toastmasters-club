module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("assets");

  return {
    templateFormats: ["njk", "html", "md", "liquid"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }

};