import styled from 'styled-components';

interface IProps {
  text: string;
  hover: boolean;
}

interface SProps {
  hover: boolean;
}

export const Button = ({ text, hover = false }: IProps) => {
  return <S_Button hover={hover}>{text}</S_Button>;
};

const S_Button = styled.button<SProps>`
  background: ${({ theme }) => theme.color.brown};
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 1.1rem;
  border-radius: 6px;
  transition: ${({ theme }) => `${theme.animationDuration} ease-in-out all`};
  /* transition: var(--animation-duration) ease-in-out all; */

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    opacity: ${({ hover }) => hover && '0.8'};
  }
`;
