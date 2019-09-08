import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MovieLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const MovieImage = styled.div`
  width: 25rem;
  height: 25rem;
  border-radius: 0.5rem;
  background: url('/movie.jpg') no-repeat center;
  background-size: cover;
  transition: 0.5s transform ease;
`;

const MovieCard = styled.div`
  margin: 1.3rem;
  margin-bottom: 0;
  max-width: 25rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  
  cursor: pointer;

  :hover {
    ${MovieImage} {
      transform: scale(1.1);
    }
  }
`;

const MovieDesc = styled(MovieCard)`
  margin: 0;
  padding: 1rem;
  width: 100%;
`;

const MovieTitle = styled.h3`
  font-weight: 900;
  font-size: 1.6rem;
  max-width: 18rem;
`;

const MovieRating = styled.div`
  color: ${({ theme }) => theme.colors.yellow};
  font-weight: bold;
`;

const MovieYear = styled.div`
  margin-top: 0.7rem;
  color: ${({ theme }) => theme.colors.grey};
`;

export default {
  MovieImage,
  MovieCard,
  MovieDesc,
  MovieTitle,
  MovieRating,
  MovieYear,
  MovieLink,
};
