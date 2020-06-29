import React, { useRef, useCallback } from 'react';
import { Text } from 'react-native';
import { FormHandles } from '@unform/core';

import Input from '../Input';

import { Container, MyForm } from './styles';

interface FormData {
  name: string;
  email: string;
}

const Form: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((data: FormData) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Text>Foi</Text>
      <MyForm ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" />
        <Input name="email" />
      </MyForm>
    </Container>
  );
};

export default Form;
