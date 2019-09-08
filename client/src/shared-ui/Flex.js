import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpaceBetween = styled(Container)`
  justify-content: space-between;
  width: 100%;
`;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const FullSquareContainer = styled(Container)`
  height: 100%;
  width: 100%;
`;

const FullSquareContainerStart = styled(FullSquareContainer)`
  justify-content: flex-start;
  flex-direction: column;
`;

export default {
  Container,
  FullSquareContainer,
  FullSquareContainerStart,
  SpaceBetween,
  Wrap,
};
