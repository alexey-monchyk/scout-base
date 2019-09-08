import { gql } from 'apollo-boost';

export const GET_MOVIES = gql`
  {
    movies {
      id,
      title,
      rating,
      year,
    }
  }
`;
