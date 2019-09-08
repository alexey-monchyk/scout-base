import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_MOVIE_BY_ID } from './queries';
import Actor from './Actor';
import { Flex } from '../../shared-ui';
import UI from './styled';

const MovieDetails = ({ match }) => {
  const { loading, error, data } = useQuery(GET_MOVIE_BY_ID, {
    variables: { id: match.params.id }
  });

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  const { title, rating, year } = data.movie;

  return (
    <UI.MovieDetails>
      <Flex.FullSquareContainerStart>
        <UI.MoviePoster />
        <Flex.SpaceBetween>
          <UI.MovieYear>Year: {year}</UI.MovieYear>
          <UI.MovieTitle>{title}</UI.MovieTitle>
          <UI.MovieRating>Rating: {rating}</UI.MovieRating>
        </Flex.SpaceBetween>
        <UI.ActorsTitle>Actors</UI.ActorsTitle>
        {
          data.movie.actors.map(actor => (
            <Actor actor={actor} key={actor.id}/>
          ))
        }
      </Flex.FullSquareContainerStart>
    </UI.MovieDetails>
  );
};

export default MovieDetails;
