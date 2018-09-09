const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const port = 9000;

const schema = buildSchema(`
  type Query {
    greeting: String
  }
`);

const root = {
    greeting: () => 'Hello Wolrd!'
}

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(port, () => console.log(`Server runing on port ${port}` ));
