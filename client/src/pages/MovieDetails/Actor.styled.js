import styled from 'styled-components';

const ActorDirector = styled.div`
  margin: 0;
  opacity: 0;
  transition: all ease 0.3s;
`;

const Actor = styled.div`
  cursor: pointer;
  width: 80%;
  border-radius: 0.8rem;
  margin: 1rem 0;
  padding: 2rem 3rem;
  background: ${({ theme }) => theme.colors.lightBlack};

  :hover {
    ${ActorDirector} {
      margin: 1rem 0;
      opacity: 1;
    }
  }
`;

const ActorBirthday = styled.div`
  font-style: italic;
  color: ${({ theme }) => theme.colors.yellow};
`;

const ActorName = styled.div`
  font-weight: bold;
  font-size: 1.7rem;
  margin-bottom: 1rem;
`;

export default {
  Actor,
  ActorBirthday,
  ActorName,
  ActorDirector,
};
