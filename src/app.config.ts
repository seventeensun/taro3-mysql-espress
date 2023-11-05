/*
 * @description:
 * @author: 观者
 * @lastEditors: 观者
 * @Date: 2023-10-31 17:42:48
 * @LastEditTime: 2023-11-05 00:55:59
 */
export default defineAppConfig({
  /** 路由需在这里注册 */
  pages: ['pages/index/index', 'pages/order/index'],
  /** 小程序的状态栏、导航条、标题、窗口背景色等 */
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'Taro3初始化',
    navigationBarTextStyle: 'black'
  },
  /** 底部选项卡配置 */
  tabBar: {
    color: '#7E838b',
    selectedColor: '#07c160', // 选项卡选中样式
    borderStyle: 'black', // 选项卡上面的那条线
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: 'assets/images/index-unselected.png',
        selectedIconPath: 'assets/images/index-selected.png',
        text: '首页'
      },
      {
        pagePath: 'pages/order/index',
        iconPath: 'assets/images/order-unselected.png',
        selectedIconPath: 'assets/images/order-selected.png',
        text: '我的订单'
      }
    ]
  }
  // 更多全局配置 https://docs.taro.zone/docs/app-config#tabbar
});
