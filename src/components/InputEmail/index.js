import React, {useEffect, useRef} from 'react';

import {Text} from 'react-native';
import {useField} from '@unform/core';

import {EmailInput, Container} from './styles';

function InputEmail({name, field, ...rest}) {
  const inputRef = useRef(null);

  const {fieldName, registerField, defaultValue, error} = useField(name);

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
        ref.setNativeProps({text: value});
        inputRef.current.value = value;
      },
      getValue(ref) {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <EmailInput
        ref={inputRef}
        label={field.title}
        placeholder={field.mask}
        keyboardAppearance="dark"
        keyboardType="email-address"
        defaultValue={defaultValue}
        placeholderTextColor="#666360"
        onChangeText={(value) => {
          if (inputRef.current) {
            inputRef.current.value = value;
          }
        }}
        {...rest}
      />
      {error && <Text>{error}</Text>}
    </Container>
  );
}

export default InputEmail;
