import { gql } from 'apollo-boost';

export const GET_MOVIE_BY_ID = gql`
  query Movie($id: ID!) {
    movie(id: $id) {
      title
      rating
      year
      actors {
        id
        name
        birthday
        country
        directors {
          name
        }
      }
    }
  }
`;