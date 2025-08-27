# Simple GraphQL & React Example

A dead simple GraphQL & React implementation!

## Setup

```bash
yarn install
node server.js # Node v10 or later
```

## Queries to try in GraphiQL

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
