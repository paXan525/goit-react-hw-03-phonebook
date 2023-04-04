import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 20px auto;

  font-weight: 700;
  font-size: 28px;
  color: #f44336;
  &:hover,
  &:focus {
    color: #4dae22;
  }
`;

export const FilterInput = styled.input`
  font-weight: 400;
  font-size: 20px;
`;
