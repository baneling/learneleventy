module.exports = function(eleventyConfig) {
    // addPassthroughCopy points at dirs/files to be copied to _site
    eleventyConfig.addPassthroughCopy("src/assets/css")
    eleventyConfig.addPassthroughCopy("src/assets/images")

    // Order the pages on the navbar by order data
    eleventyConfig.addCollection("page", function(collections) {
        return collections.getFilteredByTag("page").sort(function(a, b) {
            return a.data.order - b.data.order;
        });
    });

    // Shortcode tutorial
    eleventyConfig.addShortcode(
        "headers",
        (title, subtitle) =>
        `<h1>${title}</h1>
        <p>${subtitle}</p>`
    );

    // standard folders for stuff
    return {
        dir: {
            input: "src",
            data: "_data",
            includes: "_includes",
            layouts: "_layouts"
        }
    };
};
