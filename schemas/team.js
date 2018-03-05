export default {
  name: 'teamMember',
  title: 'Team',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Core', value: 'core'},
          {title: 'Mentor', value: 'mentor'}
        ],
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
  ],
  preview: {
    select: {
      title: 'name',
      title: 'title',
      media: 'image'
    }
  }
}