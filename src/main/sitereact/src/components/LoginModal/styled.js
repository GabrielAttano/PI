import styled from 'styled-components';
import * as Colors from '../../config/colors';

export const Modal = styled.div`
  /* display: ${(props) => (props.showModal ? 'none' : 'block')}; */
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(206, 206, 206, 0.2);
`;

export const ModalContent = styled.div`
  background-color: ${Colors.white};
  margin: auto;
  padding-top: 28px;
  padding-left: 30px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  height: 396px;
  width: 370px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  padding-right: 24px;
  padding-bottom: 24px;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
`;

export const ContinueButton = styled.button`
  outline: 0.1px;
  border-width: 1px;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  background-color: ${Colors.white};
`;

export const ContinueButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const TextContainer = styled.div`
  font-size: 14;
  color: ${Colors.gray750};
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  padding-top: 26px;
  padding-bottom: 18px;
`;
