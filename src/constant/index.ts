export let BLUR_IMAGE_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcvWS1LgAGJQIpt50GkgAAAABJRU5ErkJggg=='

export let LOGO_IMAGE_PATH = '/static/logo.png'

export let GISCUS_COMMENTS_ID = 'comments-container'
export let UTTERANCES_COMMENTs_ID = 'comments-container'
export let DISQUS_COMMENTS_ID = 'disqus_thread'

export let HEADER_HEIGHT = '69px'
export let FOOTER_HEIGHT = '188px'
export let MAIN_CONTENT_MIN_HEIGHT = `calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT})`

export let TOKEN_CLASSNAME_MAP = {
  tag: 'text-code-red',
  'attr-name': 'text-code-yellow',
  'attr-value': 'text-code-green',
  deleted: 'text-code-red',
  inserted: 'text-code-green',
  punctuation: 'text-code-white',
  keyword: 'text-code-purple',
  string: 'text-code-green',
  function: 'text-code-blue',
  boolean: 'text-code-red',
  comment: 'text-gray-500 italic',
}

export let POSTS_PER_PAGE = 5
export let FEATURED_POSTS = 5
