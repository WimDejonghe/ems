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
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?familiy=Material+Icons' }],
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML', async: true }]
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
          title: 'ESP 32 : Inleiding',
          collapsable: true,
          children: [
            
            'intro/test',
   
          ]
        },
        {
          title: 'Install Software',
          collapsable: true,
          children: [
            'part1/test',
          ]
        },
        {
          title: 'Software IDE',
          collapsable: true,
          children: [
            'part2/test',
          ]
        },
        {
          title: 'Extra Library',
          collapsable: true,
          children: [
            'part3/test',
          ]
        },
        {
          title: 'Hardware',
          collapsable: true,
          children: [
            'part4/test',
          ]
        },
        {
          title: 'Power management',
          collapsable: true,
          children: [
            'part5/test',
          ]
        },
        {
          title: 'General Purpose IO pinnen : Output',
          collapsable: true,
          children: [
            'part6/test',
          ]
        },
        {
          title: 'General Purpose IO pinnen : Input',
          collapsable: true,
          children: [
            'part7/test',
          ]
        },
        {
          title: 'Variabelen in C',
          collapsable: true,
          children: [
            'part8/test',
          ]
        },
        {
          title: 'Analoge ingangen',
          collapsable: true,
          children: [
            'part9/test',
          ]
        },
        {
          title: 'Extension shield',
          collapsable: true,
          children: [
            'part10/test',
          ]
        },
        {
          title: 'Analoge uitgangen',
          collapsable: true,
          children: [
            'part11/test',
          ]
        },
        {
          title: 'PWM uitgangen',
          collapsable: true,
          children: [
            'part12/test',
          ]
        },
        {
          title: 'Logische poorten',
          collapsable: true,
          children: [
            'part13/test',
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
