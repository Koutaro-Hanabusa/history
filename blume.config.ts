import { defineConfig } from "blume";

export default defineConfig({
  title: "英 洸太朗 - 職務経歴",
  description:
    "英 洸太朗の職務経歴書。React / TypeScript を軸としたフロントエンド開発と、デザインシステム構築の経歴を掲載。",
  deployment: {
    site: "https://history.burio16.com",
  },
  seo: {
    og: {
      enabled: true,
      fonts: [{ name: "Noto Sans JP", weight: [400, 700] }],
    },
  },
});
