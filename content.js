import viewtube from './static/posts/viewtube.md';

const posts = {
  'viewtube': viewtube
}

export function getPost(name) {
  return posts[name]
}
