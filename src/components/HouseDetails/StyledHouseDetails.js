import styled from 'styled-components';

export const StyledHouseDetails = styled.article`
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 32rem;
  padding: 0.25rem 1rem;
  max-width: 100%;
  background-color: #324960;
  border-radius: 0.5rem;
  color: #f4f4f4;
  h1 {
    font-size: 1.5rem;
    letter-spacing: 1.5px;
  }

  p {
    font-size: 1rem;
    span {
      color: #4fc3a1;
      font-style: italic;
    }
  }
`;
