import { gql } from 'apollo-server-express';

const actor = gql`
  extend type Query {
    actors: [Actor!]!
  }

  extend type Mutation {
    createActor(data: CreateActorInput!): Actor!
  }

  input CreateActorInput {
    name: String!
    birthday: String!
    country: String!
    movies: [String!]
    directors: [ID!]
  }

  type Actor {
    id: ID!
    name: String!
    birthday: DateTime!
    country: String!
    movies: [Movie!]
    directors: [Director!]
  }
`;

export default actor;