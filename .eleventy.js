const { DateTime  } = require("luxon");

module.exports = function(eleventyConfig) {
    // addPassthroughCopy points at dirs/files to be copied to _site
    eleventyConfig.addPassthroughCopy("src/assets/css");
    eleventyConfig.addPassthroughCopy("src/assets/images");
    eleventyConfig.addPassthroughCopy({"src/robots.txt": "robots.txt"});

    // Order the pages on the navbar by order data
    eleventyConfig.addCollection("page", function(collections) {
        return collections.getFilteredByTag("page").sort(function(a, b) {
            return a.data.order - b.data.order;
        });
    });

    // DateTime
    eleventyConfig.addShortcode("currentDate", (date = DateTime.now()) => {
        return date;
    });
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

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
