import { defaultTheme, defineUserConfig } from 'vuepress';
import { shikiPlugin } from '@vuepress/plugin-shiki';

export default defineUserConfig({
    lang: 'zh-CN',
    title: '武秦乾学习园地',
    description: '个人成长记录',
    base: '/daily_workout/',

    plugins: [
        shikiPlugin({
            theme: 'one-dark-pro',
            langs: ['javascript', 'typescript', 'vue-html', 'css', 'scss'],
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
    }),
});
