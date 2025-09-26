import { Plugin } from "vite";
import { Options } from "./type.ts";
import { replaceRoutes } from "./core/route.ts";

const vitePluginsUniReplacePages = (options: Options): Plugin => {
  return {
    name: "vite-plugin-uni-replace-pages",
    enforce: "pre",
    config: () => {
      const { routeJsonPath, pagesJsonPath } = options;
      replaceRoutes(routeJsonPath, pagesJsonPath);
    },
  };
};

export default vitePluginsUniReplacePages;
