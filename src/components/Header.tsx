import styled from 'styled-components';

export const Header = () => {
  return (
    <S_Header>
      <h1>2048</h1>
      <ScoreBox>
        <Score>
          <h3>score</h3>
          <p>3000</p>
        </Score>
        <Score>
          <h3>best</h3>
          <p>3400</p>
        </Score>
      </ScoreBox>
    </S_Header>
  );
};

const S_Header = styled.header`
  min-width: 340px;
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'space-between')};

  h1 {
    @media screen and (max-width: 500px) {
      font-size: 3rem;
    }
  }
`;

const ScoreBox = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'end')};

  div {
    &:first-child {
      margin-right: 10px;
    }
  }
`;

const Score = styled.div`
  width: 40%;
  height: 54px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.color.lightBrown};
  ${({ theme }) => theme.mixins.flexBox('column', 'center', 'center')};

  h3 {
    font-size: 0.8rem;
    color: #eee4da;
    text-transform: uppercase;
  }

  p {
    font-size: 1.6rem;
    color: white;
    padding-top: 2px;
    font-weight: 700;
  }
`;
