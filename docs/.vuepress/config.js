module.exports = {
  base:'/gulu-demo/',
  title: 'Gulu UI',
  description: '一个好用的UI框架',
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/install/'},
      {text: '交流', link: 'https://github.com'},
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/grid',
          '/components/input',
          '/components/layout',
          '/components/popover',
          '/components/tabs',
          '/components/toast',
          '/components/collapse'
        ]
      }
    ]
  }
}