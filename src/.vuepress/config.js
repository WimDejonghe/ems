const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'EMS',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [

      {
        text: 'Vives',
        link: 'https://www.vives.be'
      }
    ],
    sidebar: 
    {
      '/guide/': 
      [
        {
          title: 'Introductie',
          collapsable: true,
          children: [
            '',
   
          ]
        },

        {
          title: 'ESP32 : Inleiding',
          collapsable: true,
          children: [
            
            'intro/test',
   
          ]
        },
        {
          title: 'ESP32 : Hardware & Software',
          collapsable: true,
          children: [
            'part1/test',
          ]
        },
        {
          title: 'ESP32 : Software',
          collapsable: true,
          children: [
            'part2/test',
          ]
        },
        {
          title: 'ESP32 : Extra Library',
          collapsable: true,
          children: [
            'part3/test',
          ]
        },
        {
          title: 'ESP32 : Hardware',
          collapsable: true,
          children: [
            'part4/test',
          ]
        },
        {
          title: 'ESP32 : Power management',
          collapsable: true,
          children: [
            'part5/test',
          ]
        },
        {
          title: 'ESP32 : PWM',
          collapsable: true,
          children: [
            'part6/test',
          ]
        }
      ],      
    }
  },

  

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
    ],
  ]
}
