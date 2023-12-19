import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    // "@chakra-ui/storybook-addon",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-docs",
      options: {
        jsxOptions: {},
        csfPluginOptions: null,
        mdxPluginOptions: {},
        transcludeMarkdown: true,
      },
    },
    {
      name: "@storybook/addon-coverage",
      options: {
        istanbul: {
          include: ["**/stories/**"],
        },
      },
    },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
export default config;
