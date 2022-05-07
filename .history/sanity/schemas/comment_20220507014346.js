export default {
    name: 'comment',
    type: 'document',
      title: 'Comment',
    fields: [
      {
        name: 'comment',
        type: 'string',
        title: 'Comment',
      },
      {
        name: 'username',
        type: 'string',
        title: 'Username',
      },
      {
        name: 'profileImage',
        type: 'string',
        title: 'Profile image',
      },
      {
        name: 'tweet',
        type: 'reference',
        title: 'Tweet',
        description : 'Tweet that the comment is related to',
        to: {type: 'tweet'},
      }
    ]
  }