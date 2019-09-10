const { gql } = require('apollo-server-express');

const movie = gql`
  extend type Query {
    movies: [Movie!]!
    movie(id: ID!): Movie!
  }

  extend type Mutation {
    createMovie(data: CreateMovieInput!): Movie!
  }

  input CreateMovieInput {
    title: String!
    rating: Float!
    scoutbase_rating: Float!
    year: Int!
    actors: [ID!]
  }

  type Movie {
    id: ID!
    title: String!
    scoutbase_rating: Float
    rating: Float!
    year: Int!
    actors: [Actor!]!
  }
`;

module.exports = movie;