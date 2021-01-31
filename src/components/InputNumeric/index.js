import React, {useEffect, useRef} from 'react';

import {Text} from 'react-native';
import {useField} from '@unform/core';

import {NumericInput, Container} from './styles';

function InputNumeric({name, field, ...rest}) {
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
      <NumericInput
        ref={inputRef}
        label={field.title}
        placeholder={field.mask}
        keyboardAppearance="dark"
        keyboardType="numeric"
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

export default InputNumeric;
