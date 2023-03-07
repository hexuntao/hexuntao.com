import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useConfig, useTheme } from "nextra-theme-docs";
import { Footer } from "./components/Footer";
import Navigation from "./components/Navigation";
import HeaderLogo from "./components/HeaderLogo";

/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
const theme = {
  useNextSeoProps: function SEO() {
    const { frontMatter } = useConfig();
    const defaultTitle = frontMatter.overrideTitle || "Hexuntao";
    return {
      description: frontMatter.description,
      defaultTitle,
      titleTemplate: `%s – ${defaultTitle}`,
    };
  },
  gitTimestamp({ timestamp }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dateString, setDateString] = useState(timestamp.toISOString());

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      try {
        setDateString(
          timestamp.toLocaleDateString(navigator.language, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        );
      } catch (e) {
        // Ignore errors here; they get the ISO string.
        // At least one person out there has manually misconfigured navigator.language.
      }
    }, [timestamp]);

    return <>最后更新时间 {dateString}</>;
  },
  // unstable_flexsearch: true,
  // unstable_staticImage: true,
  // banner: {
  //   text: <div>🎉 网站近期建设中...</div>,
  // },
  logo: HeaderLogo,
  logoLink: false,
  head: function Head() {
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={`/static/favicon.ico`} />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000" />
      </>
    );
  },
  toc: {
    title: "在此页上",
  },
  editLink: {
    // text: "在GitHub编辑此页",
    component: () => null,
  },
  feedback: {
    content: () => null,
  },
  navbar: {
    component: Navigation,
    extraContent: (
      <>
        {/* <Github />
        <Discord /> */}
      </>
    ),
  },
  search: {
    placeholder: "搜索...",
  },
  footer: {
    component: Footer,
  },
  nextThemes: {
    defaultTheme: "dark",
  },
};
export default theme;
