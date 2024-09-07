import styled from 'styled-components';

export const ContatoStyle = styled.section`
  background-color: #D9E14F;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 50px auto;
  text-align: center;

  @media(max-width: 800px){
    margin: 4% 3%;
  }
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputStyle = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #D3DE62;
  border-radius: 5px;
  font-size: 1rem;
  background-color: white;

  &:focus {
    outline: none;
    border-color: #b0b38f9e;
    box-shadow: 0px 0px 10px #b0b38f9e;
  }
`;

export const ButtonStyle = styled.button`
  padding: 12px 20px;
  background-color: #D3DE62;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  transition: 0.3s;
  box-shadow: 0px 0px 10px #b0b38f9e;
  cursor: pointer;

  &:hover {
    background-color: #232323;
    color: #fff;
    box-shadow: 0px 0px 20px #b0b38f;
  }
`;
