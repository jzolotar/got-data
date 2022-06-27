import styled from 'styled-components';

export const StyledNavigation = styled.section`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  margin: 1rem 0;
  gap: 0.25rem;
  button {
    cursor: pointer;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    width: 5rem;
    text-align: center;
    text-transform: uppercase;
    background-color: #4fc3a1;
    color: #f4f4f4;
    letter-spacing: 1px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #324960;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    label {
      color: #f4f4f4;
      text-transform: uppercase;
    }
  }
`;
