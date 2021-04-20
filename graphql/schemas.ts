// import { buildSchema } from 'graphql';
const { buildSchema } = require('graphql');
import newsType from './types/newsType';
import userType from './types/userType';

const schema = buildSchema(
  newsType,
  // userType
);

export default schema;