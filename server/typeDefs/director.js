import { gql } from 'apollo-server-express';

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
    birthday: String!
    country: String!
    actors: [Actor!]!
  }
`;

export default director;