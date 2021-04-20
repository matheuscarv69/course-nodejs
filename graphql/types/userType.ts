export default `

type Query {
  usersList:[User]
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