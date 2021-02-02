import React, { useEffect, useRef, useState } from 'react';

import { useField } from '@unform/core';
import { transformToMaskString } from '~/utils/replaceMask';

import { PhoneInput, Container, Title, ErrorTitle } from './styles';

function InputPhone({ name, field, ...rest }) {
  const inputRef = useRef();
  const [value, setValue] = useState('');

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
        return parseFloat(ref.getRawValue());
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Title>{field.title}</Title>
      <PhoneInput
        ref={inputRef}
        type="custom"
        options={{
          mask: transformToMaskString(field.mask),
          getRawValue: (v) => v.replace(/[^A-Za-z0-9]/g, ''),
        }}
        keyboardAppearance="dark"
        value={value}
        keyboardType="numeric"
        defaultValue={defaultValue}
        placeholderTextColor="#666360"
        onChangeText={(val) => {
          setValue(val);
          inputRef.current.value = val;
        }}
        {...rest}
      />
      {error && <ErrorTitle>{error}</ErrorTitle>}
    </Container>
  );
}

export default InputPhone;
