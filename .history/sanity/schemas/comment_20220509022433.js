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
        type: 'reference',
        title: 'User',
        description : 'User that the comment is related to',
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