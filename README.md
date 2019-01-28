# Simple GraphQL & React Example

A dead simple GraphQL & React implementation!

Read more in the [blog post](https://blog.tylerbuchea.com/simple-graphql-react-example).

## Setup

```bash
git clone git@github.com:tylerbuchea/simple-graphql-and-react-example.git
cd simple-graphql-and-react-example
yarn install
node index.js
```

## Queries to try in Playground

```graphql
mutation createUser {
  createUser(name: "Buchea") {
    name
  }
}

query getUsers {
  users {
    name
  }
}
```
