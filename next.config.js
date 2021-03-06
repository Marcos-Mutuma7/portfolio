const optimizedImages = require('next-optimized-images');
const composePlugins = require('next-compose-plugins');
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
})

const nextConfiguration = {
  target: 'serverless', //will output independent pages that don't require a monolithic server. It's only compatible with next start or Serverless deployment platforms (like ZEIT Now) — you cannot use the custom server API.
};

module.exports = 
 composePlugins([optimizedImages], nextConfiguration);

  withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"]
});
