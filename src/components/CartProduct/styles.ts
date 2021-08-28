import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.3fr 0.3fr;

  padding-bottom: 20px;
  border-bottom: 2px solid var(--background);

  & + div {
    margin-top: 20px;
  }
`;

export const ContentProduct = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  img {
    width: 300px;
    height: 230px;
    border-radius: 16px;
    object-fit: cover;
    margin-right: 20px;
    box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.1);
  }

  ul {
    list-style-type: none;
  }
`;

export const ContentQuant = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  article {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 10px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      border: none;
      border-radius: 50%;
      padding: 5px;
      background-color: var(--shape);
      transition: filter 0.2s;

      svg {
        width: 24px;
        height: 24px;
      }

      &:hover {
        filter: brightness(0.9);
      }
    }

    span {
      min-width: 35px;
      text-align: center;
    }
  }
`;

export const ButtonRemove = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  margin-top: 10px;
  color: var(--red);
  background-color: transparent;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  svg {
    width: 15px;
    height: 15px;
    margin-right: 2px;
  }

  strong {
    font-size: 0.85rem;
  }
`;

export const ContentPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  strong {
    color: var(--orange);
    font-size: 1.2rem;
    margin-top: 10px;
  }
`;