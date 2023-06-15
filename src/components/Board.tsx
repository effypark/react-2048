import styled from 'styled-components';

interface SProps {
  boardSize: number;
}

export const Board = () => {
  <S_Board boardSize={3}></S_Board>;
};

const S_Board = styled.div<SProps>`
  position: relative;
  background: #bbada0;
  border-radius: 6px;
  display: grid;
  grid-template-columns: ${({ boardSize }) => `repeat(${boardSize}, 1fr)`};
  grid-gap: ${({ theme }) => theme.gridGap};
  padding: ${({ theme }) => theme.gridGap};
  user-select: none;
  touch-action: none;
`;
