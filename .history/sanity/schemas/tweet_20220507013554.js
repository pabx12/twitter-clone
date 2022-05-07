export default {
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tweet Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'username',
      title: 'Username',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'profileImage',
      title: 'Profile image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
