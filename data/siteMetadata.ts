export let siteMetadata = {
  title: 'Hexuntao blog - 个人博客',
  author: 'Hexuntao',
  fullName: 'Hexuntao',
  email: 'hexuntao@gmail.com',
  headerTitle: 'hexuntao | 个人博客',
  description: 'hexuntao 个人博客 一名专注于 Node 全栈开发 的 90后',
  language: 'en-us',
  siteUrl: 'https://hexuntao.com',
  github: 'https://github.com/hexuntao',
  twitter: 'https://twitter.com/hexuntao1',
  linkedin: 'https://linkedin.com/in/hexuntao',
}

/**
 * Select a provider and use the environment variables associated to it
 * https://vercel.com/docs/environment-variables
 * --
 *
 * Visit each provider's documentation link and follow the instructions, then add the environment variable to your project.
 */
export let commentConfig = {
  provider: 'giscus', // 'giscus' | 'utterances' | 'disqus',
  // https://giscus.app/
  giscusConfig: {
    repo: '', // process.env.GISCUS_REPO
    repositoryId: '', // process.env.GISCUS_REPOSITORY_ID
    category: '', // process.env.GISCUS_CATEGORY
    categoryId: '', // process.env.GISCUS_CATEGORY_ID
    mapping: 'title',
    reactions: '1',
    metadata: '0',
    lightTheme: 'light',
    darkTheme: 'transparent_dark',
    themeURL: '',
  },
  // https://utteranc.es/
  utterancesConfig: {
    repo: '', // process.env.UTTERANCES_REPO
    issueTerm: '',
    label: '',
    lightTheme: '',
    darkTheme: '',
  },
  // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
  disqus: {
    shortname: '', // process.env.DISQUS_SHORTNAME
  },
}
