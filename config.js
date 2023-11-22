// 配置
window.Config = {

  // 站点名
  SiteName: '站点状态监控',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两种 Api Key
  ApiKeys: [
    'm795731565-b747187b4bbe357b3f08b012',
    'm795731558-ecfd31fa6c8e923e37932374',
    'm795733216-a4b157e615d37325829886c1',
    'm795733290-2a55c75689f3dd2368b2c51f'
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: '回到资讯站',
      url: 'https://lavaver.github.io'
    }
  ]
};
