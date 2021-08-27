import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  background-color: var(--shape);
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.1);
  padding: 12px 20px;

  h1 {
    font-size: 1.6rem;
  }

  a {
    color: var(--black);
    border-radius: 50%;
    padding: 8px;
    background-color: var(--background);

    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;