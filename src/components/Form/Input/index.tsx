import React, { useEffect, useRef, useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { useField } from '@unform/core';

interface Props {
  name: string;
}

type InputProps = TextInputProps & Props;

const Input = ({ name, ...rest }: InputProps) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  // useEffect(() => {
  //   if (inputRef !== null && inputRef.current) {
  //     inputRef.current.value = defaultValue;
  //   }
  // }, [defaultValue]);

  // useEffect(() => {
  //   registerField({
  //     name: fieldName,
  //     ref: inputRef.current,
  //     path: 'value',
  //     clearValue(ref) {
  //       ref.value = '';
  //       ref.clear();
  //     },
  //     setValue(ref, value) {
  //       ref.setNativeProps({ text: value });
  //       inputRef.current.value = value;
  //     },
  //     getValue(ref: { value: any }) {
  //       return ref.value;
  //     },
  //   });
  // }, [fieldName, registerField]);

  return (
    <TextInput
      // ref={inputRef}
      keyboardAppearance="dark"
      defaultValue={defaultValue}
      placeholder="Aaaaaaa"
      placeholderTextColor="#666360"
      onChangeText={(value) => {
        if (inputRef && inputRef.current) {
          inputRef.current.value = value;
        }
      }}
      {...rest}
    />
  );
};
export default Input;
