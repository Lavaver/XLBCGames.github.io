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
    'm795733449-6b8e39f5b2e5d6436816b6b8',
    'm795733521-df61257f91fa3c2649e46129',
    'm795733559-16ff7a46f71e3610345c6610'
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
