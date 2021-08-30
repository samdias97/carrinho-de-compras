import styled from "styled-components";
import { lighten } from 'polished';

export const Container = styled.div`
  div {
    margin-top: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    button {
      flex: 1;
      padding: 10px;
      border: none;
      background-color: var(--red);
      color: var(--shape);
      border: 1px solid var(--red);
      border-radius: 7px;
      font-weight: bold;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${lighten(0.1, '#e52e4d')};
      }

      & + button {
        margin-left: 20px;
        background-color: transparent;
        color: var(--dark-gray);
        border-color: var(--dark-gray);

        &:hover {
          background-color: transparent;
          color: ${lighten(0.1, '#606885')};
        }
      }
    }
  }
`;