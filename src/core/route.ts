import { Route, TabBarItem, UniappPages } from "../type.ts";
import { readerJson, writeJson } from "./file.ts";

/**
 * 把路由对象转换成uniapp的pages对象
 */
const route2UniPage = (routes: Route[]) => {
  const pages = [];
  const tabBar: TabBarItem[] = [];
  const map: Record<string, any> = {};
  for (const route of routes) {
    const { path, style, isHomePage, isTabBar } = route || {};
    if (!path) continue;

    if (map[path]) {
      continue;
    }
    map[path] = true;
    if (isTabBar) {
      if (tabBar.length === 5) {
        console.error(
          "----- 不支持配置5个以上的tabBar页面，请检查route.json文件 ----- \n"
        );
        continue;
      }

      // 写入tabBar
      tabBar.push({
        pagePath: path,
        text: route.text,
        iconPath: route.iconPath,
        selectedIconPath: route.selectedIconPath,
      });
    }

    // 写入页面
    const page = { path: path, style: style };
    isHomePage ? pages.unshift(page) : pages.push(page);
  }

  return { pages, tabBar };
};

/**
 * 解析本地pages.json文件
 */
export const parseLocalPagesJson = (
  pageJsonPath: string
): Promise<UniappPages> => {
  return new Promise(async (resolve, reject) => {
    let pageJsonObj = { pages: [] };
    try {
      const pageJson = await readerJson(pageJsonPath);
      pageJsonObj = JSON.parse(pageJson);
      resolve(pageJsonObj);
    } catch {
      reject(pageJsonObj);
    }
  });
};

export const replaceRoutes = async (
  routeJsonPth: string,
  pageJsonPath: string
) => {
  if (!pageJsonPath) {
    console.log("---- page.json文件地址错误 -----");
    return;
  }
  // 读取本地pages.json
  const pageJsonObj = await parseLocalPagesJson(pageJsonPath);

  // 读取route.json文件，获取路由列表
  const routeJson = await readerJson(routeJsonPth);
  const { routes } = JSON.parse(routeJson);
  const { pages, tabBar } = route2UniPage(routes);
  pageJsonObj.pages = pages;
  pageJsonObj.tabBar
    ? (pageJsonObj.tabBar.list = tabBar)
    : (pageJsonObj.tabBar = { list: tabBar });

  // 更新pages.json的页面配置(主要更新pages字段和tabBar字段)
  const newPageJson = JSON.stringify(pageJsonObj, null, 2);
  writeJson(pageJsonPath, newPageJson);
};
