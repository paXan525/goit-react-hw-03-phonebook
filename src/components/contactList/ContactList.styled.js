import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Item = styled.li`
  width: 400px;
  margin: 10px;
  padding: 10px 30px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;

  border: 2px solid #99004f;
  border-radius: 4px;
`;

export const Paragraph = styled.p`
  padding-bottom: 20px;
  font-weight: 700;
  font-size: 28px;
`;

export const Button = styled.button`
  width: 100px;
  align-self: center;
  padding: 5px 20px;

  font-weight: 400;
  font-size: 18px;
  background-color: #ffffff;

  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: 1px solid #7c9073;

  &:hover,
  &:focus {
    background-color: #f44336;
    border: 1px solid #4dae22;
  }
`;
