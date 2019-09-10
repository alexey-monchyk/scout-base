const { gql } = require('apollo-server-express');

const director = gql`
  extend type Query {
    directors: [Director!]!
  }

  extend type Mutation {
    createDirector(data: CreateDirectorInput!): Director!
  }

  input CreateDirectorInput {
    name: String!
    birthday: String!
    country: String!
    actors: [ID!]!
  }

  type Director {
    id: ID!
    name: String!
    birthday: DateTime!
    country: String!
    actors: [Actor!]!
  }
`;

module.exports = director;