/** @type {import('next').NextConfig} */

//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const { withNx } = require("@nrwl/next/plugins/with-nx");
const path = require("path");

const nextConfig = {
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
    outputFileTracingExcludes: {
      "*": [
        // prettier-ignore
        'node_modules/@swc/core-linux-x64-gnu',
        "node_modules/@swc/core-linux-x64-musl",
        "node_modules/@esbuild/linux-x64",
        "node_modules/framer-motion/dist",
      ],
    },
  },
};

module.exports = nextConfig;
