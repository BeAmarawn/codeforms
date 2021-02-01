import React, { useEffect, useRef } from 'react';

import { Text } from 'react-native';
import { useField } from '@unform/core';

import { InputShortText, Container } from './styles';

function InputText({ name, field, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue(ref) {
        ref.value = '';
        ref.clear();
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        inputRef.current.value = value;
      },
      getValue(ref) {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <InputShortText
        ref={inputRef}
        label={field.title}
        placeholder={field.mask}
        keyboardAppearance="dark"
        defaultValue={defaultValue}
        errorStyle={{ color: 'red', fontSize: 15 }}
        errorMessage={error}
        placeholderTextColor="#666360"
        onChangeText={(value) => {
          if (inputRef.current) {
            inputRef.current.value = value;
          }
        }}
        {...rest}
      />
    </Container>
  );
}

export default InputText;
