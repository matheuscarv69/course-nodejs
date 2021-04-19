export default
  `
scalar Date

type Query{
  newsList:[News]
  newsGetById(id: String): News
  usersList:[User]
}

type Mutation{
  addNews(input: NewsInput): News
  updateNews(id: String, input: NewsInput): News
  deleteNews(id: String): News
}

type News{
  _id: String,
  hat: String,
  title: String,
  text: String,
  author: String,
  img: String,
  publishDate: Date,
  tag: String,
  link: String,
  active: Boolean
}

input NewsInput{
  _id: String,
  hat: String,
  title: String,
  text: String,
  author: String,
  img: String,
  publishDate: Date,
  tag: String,
  link: String,
  active: Boolean
}


type User {
  _id: String,
  username: String,
  email: String
}

input UserInput {
  _id: String,
  username: String,
  email: String
}

`