'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_93145654';

  // add your config here
  config.middleware = [];
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '10.9.196.184',
      // 端口号
      port: '3306',
      // 用户名
      user: 'blued',
      // 密码
      password: 'ELS5Pt4Hdx3SfGRU',
      // 数据库名
      database: 'interview',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  config.security = {
      csrf: {
      enable: false,
    }
  };

  return config;
};



