import { defaultTheme, defineUserConfig } from 'vuepress';
import { prismjsPlugin } from '@vuepress/plugin-prismjs';

export default defineUserConfig({
    lang: 'zh-CN',
    title: '武秦乾学习园地',
    description: '个人成长记录',
    base: '/daily_workout/',
    plugins: [
        prismjsPlugin({
            // 配置项
            preloadLanguages: ['markdown', 'typescript', 'javascript', 'jsdoc'],
        }),
    ],
    theme: defaultTheme({
        navbar: [
            // NavbarItem
            {
                text: '算法',
                link: '/algorithm/',
            },
            {
                text: '精文',
                link: '/text/',
            },
        ],
        sidebar: {
            '/algorithm/': [
                {
                    text: '算法',
                    // children: ['/guide/README.md', '/guide/getting-started.md'],
                },
            ],
            '/text/': [
                {
                    text: '精品文章',
                    children: ['/reference/cli.md', '/reference/config.md'],
                },
            ],
        },
    }),
});
