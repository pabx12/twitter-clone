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
        name: 'user',
        title: 'User',
        type: 'reference',
        to: {type: 'user'},
      },
      {
        name: 'commentImage',
        type: 'string',
        title: 'Comment image',
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