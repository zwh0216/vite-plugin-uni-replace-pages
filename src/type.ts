/** 插件的配置项 */
export interface Options {
  /** route.json文件的相对路径 */
  routeJsonPath: string;
  /** pages.json文件的相对路径 */
  pagesJsonPath: string;
}

/**
 * 路由项的字段属性
 */
export interface Route {
  /** 对应uniapp Pages.json 的path，只想页面组件 */
  path: string;
  /** 路由路径 */
  routePath: string;
  /** 路由名称，必须唯一 */
  name: string;
  /** 当前路由是否是tabBar页面 */
  isTabBar?: boolean;
  /** 当前路由是否是首页面 */
  isHomePage?: boolean;
  /** 配置的页面级样式 */
  style: Record<string, any>;
  [key: string]: any;
}

// uniapp的样式， 通用样式页面样式一致
export interface UniappStyle {
  // 导航栏背景颜色（同状态栏背景色）
  navigationBarBackgroundColor?: string;
  // 导航栏标题颜色及状态栏前景颜色，仅支持 black/white
  navigationBarTextStyle?: "black" | "white";
  // 导航栏标题文字内容
  navigationBarTitleText?: string;
  // 导航栏阴影，配置参考下方
  navigationBarShadow?: Record<string, any>;
  // 导航栏样式，仅支持 default/custom。custom 即取消默认的原生导航栏
  navigationStyle?: "default" | "custom";
  // 下拉 loading 的样式，仅支持 dark/light
  backgroundTextStyle?: "dark" | "light";
  // 是否开启下拉刷新，详见页面生命周期。
  enablePullDownRefresh?: boolean;
  // 页面上拉触底事件触发时距页面底部距离，单位只支持 px，详见页面生命周期
  onReachBottomDistance?: number;
  // 其他可扩展字段
  [key: string]: any;
}

/**
 * tabBar的类型字段
 */
export interface TabBarItem {
  /** 页面的路径，指向vue组件 */
  pagePath: string;
  /** tabBar文本 */
  text: string;
  /** icon路径 */
  iconPath: string;
  /** 选中时，显示icon的路径 */
  selectedIconPath: string;
}

/**
 * uniapp的pages.json文件的配置项类型（本地只维护了部分，其他可以查看uniapp官网）
 * @see https://uniapp.dcloud.net.cn/collocation/pages.html#pages
 */
export interface UniappPages {
  /** uniapp的页面列表 */
  pages: {
    /** 页面的路径，指向vue组件 */
    path: string;
    /** 页面级的样式 */
    style: UniappStyle;
  }[];
  /** 全局样式 */
  globalStyle?: UniappStyle;
  /** 底部tabBar */
  tabBar?: {
    /** tab 上的文字默认颜色 */
    color?: string;
    /** tab 上的文字选中时的颜色	 */
    selectedColor?: string;
    /** tab 的背景色	 */
    backgroundColor?: string;
    /** tabbar 上边框的颜色，可选值 black/white，black 对应颜色 rgba(0,0,0,0.33)，white 对应颜色 rgba(255,255,255,0.33)。	 */
    borderStyle?: string;
    /** tab 的列表，详见 list 属性说明，最少 2 个、最多 5 个 tab	 */
    list: TabBarItem[];
  };
}
