import { Plugin } from 'vite';

/** 插件的配置项 */
export interface Options {
  /** route.json文件的相对路径 */
  routeJsonPath: string;
  /** pages.json文件的相对路径 */
  pagesJsonPath: string;
}

export default function vitePluginsUniReplacePages(options: Options[]): Plugin;