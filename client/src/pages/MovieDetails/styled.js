import styled from 'styled-components';

const MovieDetails = styled.div`
  min-height: 90vh;
  width: 70rem;
  margin: 0 auto;
`;

const MoviePoster = styled.div`
  margin-top: 7rem;
  width: 70rem;
  height: 40rem;
  background: url('/movie.jpg') no-repeat center;
  background-size: cover;
`;

const MovieTitle = styled.h2`
  text-align: center;
  font-size: 4rem;
  letter-spacing: 0.1rem;
  margin: 2rem;
`;

const MovieRating = styled.div`
  margin-right: 5rem;
  color: ${({ theme }) => theme.colors.yellow};
  font-weight: bold;
`;

const MovieYear = styled.div`
  margin-left: 5rem;
  font-weight: bold;
`;

const ActorsTitle = styled.h1`
  font-size: 2.5rem;
  margin: 2rem 0;
  font-weight: bold;
`;

export default {
  MovieDetails,
  MoviePoster,
  MovieTitle,
  MovieRating,
  MovieYear,
  ActorsTitle,
};
