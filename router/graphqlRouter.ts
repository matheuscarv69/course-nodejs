import * as express from "express";
import * as graphqlHTTP from 'express-graphql';

import schemas from "../graphql/schemas";
import resolvers from "../graphql/resolvers";

const graphQlRouter = express.Router();

graphQlRouter.use('/graphql', graphqlHTTP({
  schema: schemas,
  rootValue: resolvers,
  graphiql: true
}))


export default graphQlRouter;