export default
  `
scalar Date

type Query{
  newsList:[News]
  newsGetById(id: String): News
}

type News{
  _id: String,
  hat: String,
  title: String,
  author: String,
  img: String,
  publishDate: Date,
  link: String,
  tag: String,
  active: Boolean
}

`