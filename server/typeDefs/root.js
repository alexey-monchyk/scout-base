import { gql } from 'apollo-server-express';

const root = gql`
  scalar DateTime

  type Query {
    root: String
  }

  type Mutation {
    root: String
  }
`;

export default root;