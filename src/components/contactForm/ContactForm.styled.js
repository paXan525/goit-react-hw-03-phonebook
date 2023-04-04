import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 20px 10px;
  gap: 12px;

  border: 2px solid #99004f;
  border-radius: 4px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;

  font-weight: 700;
  font-size: 28px;
  color: #f44336;
  &:hover,
  &:focus {
    color: #4dae22;
  }
`;

export const FormInput = styled.input`
  font-weight: 400;
  font-size: 20px;
`;

export const Button = styled.button`
  width: 400px;
  align-self: center;
  padding: 5px 20px;

  font-weight: 700;
  font-size: 24px;
  background-color: #f44336;

  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: 1px solid #7c9073;

  &:hover,
  &:focus {
    background-color: #4dae22;
    border: 1px solid #4dae22;
  }
`;
