import styled from 'styled-components';

export const StyledCharacterList = styled.section`
  padding: 2rem;

  h1 {
    text-align: center;
    color: #324960;
    font-size: 1.5rem;
    font-weight: 700;
  }
  table {
    border-radius: 1rem;
    font-size: 12px;
    font-weight: normal;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    background-color: white;

    & td,
    & th {
      text-align: center;
      padding: 8px;
    }
    & td {
      border-right: 1px solid #f8f8f8;
      font-size: 12px;
      word-wrap: break-word;
    }

    & thead th {
      color: #ffffff;
      background: #4fc3a1;
    }

    & thead th:nth-child(odd) {
      color: #ffffff;
      background: #324960;
    }
    & tbody tr:nth-child(even) {
      background: #f4f4f4;
    }
  }
`;
