import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import MovieCard from './MovieCard';
import { Flex } from '../../shared-ui';
import { GET_MOVIES } from './queries';

const Movies = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return <div>Loading...</div> 
  if (error) return <div>Error: {error}</div>


  return (
    <Flex.Wrap>
      {
        data.movies.map(movie => (
          <MovieCard
            movie={movie}
            key={movie.id}
          />
        ))
      }
    </Flex.Wrap>
  );
};

export default Movies;
