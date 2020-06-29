import React from 'react';
import { Text } from 'react-native';

import { TextInput } from 'react-native-gesture-handler';
import { Container } from '~/pages/Main/styles';
import MyForm from '../../components/Form/Form';

export default function Main() {
  return (
    <Container>
      <Text>Aki</Text>
      {/* <MyForm /> */}

      <TextInput placeholder="AAa" />
    </Container>
  );
}
