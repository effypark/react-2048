import styled from 'styled-components';
import { Button } from '.';

export const Sub = () => {
  return (
    <Container>
      <Text>Enjoy, your GAME !</Text>
      <ButtonWrapper>
        <Button text="UNDO" width="40%" hover />
        <Button text="NEW GAME" width="60%" hover />
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  min-width: 340px;
  padding: 5px 0;
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'space-between')};
`;

const Text = styled.em`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color.lightBrown};
`;

const ButtonWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'end')};
  min-width: 240px;

  button {
    &:first-child {
      margin-right: 10px;
    }
  }
`;
