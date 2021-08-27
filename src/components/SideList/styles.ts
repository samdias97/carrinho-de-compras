import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child {
    margin-bottom: 20px;
  }
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  padding: 5px 0;
  overflow: hidden;
`;

interface ButtonArrowProps {
  direction: 'left' | 'right';
}

export const ButtonArrow = styled.button<ButtonArrowProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  border: none;
  margin: 0 10px;
  border-radius: ${props => props.direction === 'left' ? '50% 0 0 50%' : '0 50% 50% 0'};
  opacity: 0.3;
  background: ${props => props.direction === 'left' ? `linear-gradient(
    to left,
    rgba(0,0,0,0) 0%,
    rgba(0,0,0,0.2) 100%
  )` : `linear-gradient(
    to right,
    rgba(0,0,0,0) 0%,
    rgba(0,0,0,0.2) 100%
  )`};

  transition: opacity 0.4s;  

  &:hover {
    opacity: 1;
  }

  svg {
    width: 42px;
    height: 42px;
  }
`;