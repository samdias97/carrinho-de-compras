import styled, { keyframes } from "styled-components";

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.3fr 0.3fr;

  padding: 10px 10px 20px 10px;
  border-bottom: 2px solid var(--background);
  overflow: hidden;

  & + div {
    margin-top: 10px;
  }
`;

export const ContentProduct = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  animation: ${appearFromRight} 0.8s backwards;

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

  animation: ${appearFromRight} 0.8s backwards;
  animation-delay: 0.2s;

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
  animation: ${appearFromRight} 0.8s backwards;
  animation-delay: 0.4s;

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

  animation: ${appearFromRight} 0.8s backwards;
  animation-delay: 0.6s;

  strong {
    color: var(--orange);
    font-size: 1.2rem;
    margin-top: 10px;
  }
`;