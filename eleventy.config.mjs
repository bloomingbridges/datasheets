export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("*.svg");
    eleventyConfig.addPassthroughCopy("favicon.ico");
}