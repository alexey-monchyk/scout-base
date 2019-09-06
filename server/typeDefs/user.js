import { gql } from 'apollo-server-express';

const user = gql`
  extend type Query {
    users: [User!]!
  }

  extend type Mutation {
    createUser(data: CreateUserInput!): User!
  }

  input CreateUserInput {
    fullName: String!
    birthday: String!
    username: String!
    password: String!
  }

  type User {
    id: ID!
    fullName: String!
    birthday: String!
    username: String!
    password: String!
  }
`;

export default user;