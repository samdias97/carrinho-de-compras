import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child {
    margin-bottom: 20px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    margin: 0 10px;
    border-radius: 50%;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    svg {
      width: 42px;
      height: 42px;
    }
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