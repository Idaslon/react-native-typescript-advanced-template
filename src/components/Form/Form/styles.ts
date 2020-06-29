import styled from 'styled-components/native';
import { Form } from '@unform/mobile';

export const Container = styled.View`
  flex: 1;

  background: #aaa;
`;

export const MyForm = styled(Form)`
  width: 400px;
  height: 400px;
`;
