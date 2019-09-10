const { gql } = require('apollo-server-express');

const user = gql`
  extend type Query {
    users: [User!]!
    user(where: GetUserInput!): User!
  }

  extend type Mutation {
    createUser(data: CreateUserInput!): AuthUser!
    login(data: LoginUserInput!): AuthUser!
  }

  input GetUserInput {
    username: String
    id: ID
  }

  input CreateUserInput {
    name: String!
    birthday: String!
    username: String!
    password: String!
  }

  input LoginUserInput {
    username: String!
    password: String!
  }

  type AuthUser {
    token: String!
    user: User!
  }

  type User {
    id: ID!
    name: String!
    birthday: DateTime!
    username: String!
  }
`;

module.exports = user;