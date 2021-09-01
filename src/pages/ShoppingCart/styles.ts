import styled from "styled-components";
import { lighten } from 'polished';

export const Container = styled.div`
  margin: 20px;
  padding: 20px;
  border-radius: 16px;
  background-color: var(--shape);
`;

export const HeaderCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;

  @media screen and (max-width: 680px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    width: 24px;
    height: 24px;
    margin-right: 20px;
    color: var(--orange);
  }

  h2 {
    font-size: 1.5rem;
  }
`;

export const ContentOptions = styled.div`
  display: flex;

  a {
    text-decoration: none;
    padding: 10px;
    border: 1px solid var(--orange);
    border-radius: 7px;
    color: var(--orange);
    font-weight: bold;
    transition: color 0.2s;

    &:hover {
      color: ${lighten(0.2, "#ff6600")};
    }
  }

  button {
    border: none;
    border-radius: 7px;
    padding: 10px;
    margin-left: 20px;
    font-size: 1rem;
    font-weight: bold;
    color: var(--shape);
    background-color: var(--red);
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 18px;
      height: 18px;
      margin-right: 4px;
    }

    &:hover {
      background-color: ${lighten(0.1, "#e52e4d")};
    }
  }

  @media screen and (max-width: 680px) {
    margin-top: 10px;
  }

  @media screen and (max-width: 310px) {
    flex-direction: column;

    button {
      margin: 10px 0 0 0;
    }
  }
`;

export const List = styled.div`
  height: calc(100vh - 314px);
  overflow: auto;

  @media screen and (max-width: 680px) {
    height: calc(100vh - 360px);
  }
`;

export const CartEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: calc(100vh - 247px);
  padding: 10px;

  a {
    text-decoration: none;
    padding: 10px;
    margin-top: 40px;
    border: 1px solid var(--orange);
    border-radius: 7px;
    color: var(--orange);
    font-weight: bold;
    transition: color 0.2s;

    &:hover {
      color: ${lighten(0.2, "#ff6600")};
    }
  }
`;