import styled from 'styled-components';

export const Header = () => {
  return (
    <S_Header>
      <h1>2048</h1>
      <Score>
        <h3>score</h3>
        <p>3000</p>
      </Score>
      <Score>
        <h3>best</h3>
        <p>3400</p>
      </Score>
    </S_Header>
  );
};

const S_Header = styled.header`
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'space-between')};
`;

const Score = styled.div`
  width: 120px;
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
