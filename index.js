const express = require('express');
const expressGraphQL = require('express-graphql');
const { buildSchema } = require('graphql');
const expressPlayground = require('graphql-playground-middleware-express')
  .default;

// Setup
const app = new express();
const db = {
  users: [{ name: 'Tyler' }, { name: 'Brett' }, { name: 'Josh' }],
};

// GraphQL stuff
const resolvers = {
  users: () => {
    const { users } = db;
    return users;
  },
  createUser: ({ name }) => {
    const user = { name };
    db.users.push(user);
    return user;
  },
};

const schema = buildSchema(`
  type Query {
    users: [User]
  }
  type Mutation {
    createUser(name: String): User
  }
  type User {
    name: String
  }
`);

// Express stuff
app
  .use('/', express.static(__dirname + '/dist'))
  .use(
    '/graphql',
    expressGraphQL(req => ({
      schema,
      rootValue: resolvers,
      graphiql: true,
      context: { userId: req.jwt },
    }))
  )
  .get('/playground', expressPlayground({ endpoint: '/graphql' }))
  .listen(3000, () => {
    console.log('Visit: http://localhost:3000/ for React.js front-end');
    console.log(
      'Visit: http://localhost:3000/playground for GraphQLPlayground'
    );
  });
