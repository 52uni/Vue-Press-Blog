import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "UNI知识宝库",
  description: "Just playing around",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "UNI",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    autoSetBlogCategories: true,
    autoAddCategoryToNavbar:true,
    autoSetSeries:true,
    lastUpdatedText: "",
    password:"14e1b600b1fd579f47433b88e8d85291",
    // series 为原 sidebar
    series: {
      "/docs/theme-reco/": [
        {
          text: "设计模式",
          children: ['Creational Patterns', 'Structural Patterns','Behavioral Patterns','J2EE'],
          collapsible: true
        },
        {
          text: "SSM",
          children: ['Spring', 'SpringMVC','Mybatis'],
          collapsible: true
        },
      ],
    },
    navbar: [
      { text: "Home", link: "/" },
      {text: "Comments", link: "Comments"},
      {text: "About", link: "About"},
      {text: "ChatAI", link: "https://www.chat.52uni.cn"}
    ],
   
    bulletin: {
      body: [
        {
          type: "text",
          content: `🎉🎉🎉 分享学习资料`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "联系方式",
        },
        {
          type: "text",
          content: `
          <ul>
            <li>QQ1：986699282</li>
            <li>QQ2：749054429</li>
            <li>wx：UNI-1124</li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "个人",
        },
        {
          type: "text",
          content: `
          <ul>
            <li><a href="https://www.chat.52uni.cn">ChatAI<a/></li>
            <li><a href="https://github.com/52uni/">52uni<a/></li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "buttongroup",
          children: [
            {
              text: "打赏",
              link: "/docs/others/donate.html",
            },
          ],
        },
      ],
    },
    commentConfig: {
      type: 'giscus',
      // options 与 1.x 的 valineConfig 配置一致
      options: {
        repo: "52uni/comment",
        repoId: 'R_kgDOJrK6KA',
        category: 'Announcements',
        categoryId: 'DIC_kwDOJrK6KM4CW9AP',
        mapping: "pathname", 
        hideComments: false ,
        strict:"0",
        position:"buttom",
        loading: "lazy"
      },
    },
  }),
  debug: true,
});
