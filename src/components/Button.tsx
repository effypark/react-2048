import styled from 'styled-components';

interface IProps {
  text: string;
  hover: boolean;
  width?: string;
}

interface SProps {
  hover: boolean;
  width?: string;
}

export const Button = ({ text, hover = false, width }: IProps) => {
  return (
    <S_Button hover={hover} width={width}>
      {text}
    </S_Button>
  );
};

const S_Button = styled.button<SProps>`
  background: ${({ theme }) => theme.color.brown};
  width: ${({ width }) => width && width};
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 1.1rem;
  border-radius: 6px;
  transition: ${({ theme }) => `${theme.animationDuration} ease-in-out all`};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    opacity: ${({ hover }) => hover && '0.8'};
  }
`;
