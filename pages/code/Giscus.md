---
title: Giscus安装
---

# Giscus：将 GitHub 讨论带到自己的博客

_之前一直在找一些能够嵌入到自己博客文章上，游客可以登录已有的社交体系账号进行评论回复的，网上找了一些，但不多数都是国外的社交平台，也不知道国内的有没有。_

下面列出几个之前了解过的：

- **[Facebook Comment](https://developers.facebook.com/docs/plugins/comments/)** - 许多网站都使用这种方法。但就我个人而言，我一点也不喜欢它的用户界面。修复任何东西都非常困难。另外，假设要粘贴代码，很难粘贴任何东西。（没用过，不打算用）
- **[Disqus](https://disqus.com/)** - 感觉这个很难登录（貌似要科学上网）。但我看很多博客用这种，他们中的大多数应该更多地用于 Wordpress。（有待研究）
- **Github Discussion**  [Giscus](https://giscus.app/)\*\* - 偶然发现了 Giscus，它使用 GitHub Discussion API 创建一个讨论频道。（主要介绍这个）

> 前提须知

1.  必须要用 GitHub 登录，写博客一般都是技术类的，看的人估计都有 GitHub 账号。
2.  它与 GitHub Discussion 非常相关。如果有一天我将一篇文章移到另一个地方，这些评论将不会跟随，如果 GitHub Discussion 崩溃了，那也就不能发表评论。
3.  当有人这样评论时，没有通知提醒。
4.  它是开源的。

## 开始安装 Giscus

前往[Giscus](https://giscus.app/zh-CN)一步一步进行

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a2065e16ef148a0814275d6c6f7a7f1~tplv-k3u1fbpfcp-watermark.image?)

为存储库启用或禁用 GitHub Discussions 详细教程 [前往](https://docs.github.com/zh/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository)

启用

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ba9497a930cd4daca738b3b6913400ea~tplv-k3u1fbpfcp-watermark.image?)

当一切都完成时   我们需要粘贴的代码如下所示。giscus.app 帮助我们自动填充所有属性。粘贴它，你就完成了。

这是一个示例

```
import Head from 'next/head'
import { useMounted } from 'lib/use-mounted'
export default function Giscus() {
  const mounted = useMounted()
  return !mounted ? null : (
    <>
      <Head>
        <script
          src="https://giscus.app/client.js"
          data-repo="hexuntao/hexuntao.com"
          data-repo-id="YOUR_REPO_ID"
          data-category="General"
          data-category-id="YOUR_CATEGORY_ID"
          data-mapping="title"
          data-reactions-enabled="1"
          data-theme="light"
          crossOrigin="anonymous"
          async
        />
      </Head>
      <div className="giscus" />
    </>
  )
}
```

如果是 NextJS，就用它。`next/head`如果是 React，它是一个 SPA，我推荐使用 Helmet，把脚本放在上面。`<head>`

之后创建一个空的 div 插入，`className="giscus"`之后浏览器加载完脚本就知道 iframe 组件要丢到这个 div 上了
