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
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: {type: 'author'},
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