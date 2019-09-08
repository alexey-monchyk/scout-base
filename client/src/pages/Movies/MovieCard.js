import React from 'react';
import PropTypes from 'prop-types';

import { Flex } from '../../shared-ui';
import UI from './MovieCard.styled';

const MovieCard = ({ movie: {
  id,
  title,
  year,
  rating,
} }) => (
    <UI.MovieLink to={`/movies/${id}`}>
      <UI.MovieCard>
        <div style={{ overflow: 'hidden' }}>
          <UI.MovieImage></UI.MovieImage>
        </div>
        <UI.MovieDesc>
          <Flex.SpaceBetween>
            <UI.MovieTitle>{title}</UI.MovieTitle>
            <UI.MovieRating>{rating}</UI.MovieRating>
          </Flex.SpaceBetween>
          <UI.MovieYear>{year}</UI.MovieYear>
        </UI.MovieDesc>
      </UI.MovieCard>
    </UI.MovieLink>
  );

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    // imageUrl: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired
};

export default MovieCard;
