export const endpoints = {
  // DOC: https://dummyapi.io/docs/user
  user: {
    list: '/user',
    byId: (id: string) => `user/${id}`,
    create: 'user/create',
    posts: (id: string) => `user/${id}/post`,
    comments: (id: string) => `user/${id}/comment`
  },
  // DOC: https://dummyapi.io/docs/post
  post: {
    list: 'post',
    byId: (id: string) => `post/${id}`,
    create: 'post/create',
    comments: (id: string) => `post/${id}/comment`
  },
  // DOC: https://dummyapi.io/docs/comment
  comment: {
    list: 'comment',
    create: 'comment/create',
    byId: (id: string) => `comment/${id}`
  },
  // DOC: https://dummyapi.io/docs/tag
  tag: {
    list: 'tag'
  }
};
