import styled from 'styled-components';

export const StyledFormFilters = styled.section`
  form {
    margin-bottom: 0.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    div:last-child {
      display: flex;
      gap: 0.25rem;
      button {
        cursor: pointer;
        border: none;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        width: 7rem;
        text-align: center;
        text-transform: uppercase;
        background-color: #324960;
        background-color: #4fc3a1;
        color: #f4f4f4;
        letter-spacing: 1px;
      }

      button:first-child {
        background-color: #4fc3a1;
      }
      button:disabled {
        background-color: #f4f4f4;
        color: #333;
        border: 1px solid #333;
        cursor: not-allowed;
      }
    }
    label {
      text-transform: uppercase;
    }
  }
`;
