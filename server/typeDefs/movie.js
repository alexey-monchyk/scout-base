import { gql } from 'apollo-server';

const movie = gql`
  extend type Query {
    movies: [Movie!]!
  }

  extend type Mutation {
    createMovie(data: CreateMovieInput!): Movie!
  }

  input CreateMovieInput {
    title: String!
    rating: Float!
    year: String!
    actors: [ID!]
  }

  type Movie {
    id: ID!
    title: String!
    rating: Float!
    year: String!
    actors: [Actor!]!
  }
`;

export default movie;