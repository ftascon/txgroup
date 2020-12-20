#API

1. install dependecies ``yarn``
2. start project ``yarn start``


##Data
generate in this website: https://www.json-generator.com/
with this configuration:
```
[
  '{{repeat(5, 8)}}',
  {
    _id: '{{objectId()}}',
    image: 'http://placehold.it/32x32',
    author: {
      name: '{{firstName()}} {{surname()}}',
      email: '{{email()}}'
    },
    title: '{{lorem(3, "words")}}',
    content: '{{lorem(2, "paragraphs")}}',
    comments: [
      '{{repeat(1, 6)}}',
      {
        _id: '{{objectId()}}',
        author: {
			name: '{{firstName()}} {{surname()}}',
			email: '{{email()}}'
		},
        title: '{{lorem(2, "words")}}',
        content: '{{lorem(15, "words")}}'
      }
    ]
  }
]
```

