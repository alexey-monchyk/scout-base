import { gql } from 'apollo-server';

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
    movies: [ID!]
    directors: [ID!]
  }

  type Actor {
    id: ID!
    name: String!
    birthday: String!
    country: String!
    movies: [Movie!]
    directors: [Director!]
  }
`;

export default actor;