import React, {useEffect, useRef} from 'react';

import {Text} from 'react-native';
import {useField} from '@unform/core';

import {LongTextInput, Container} from './styles';

function InputLongText({name, field, ...rest}) {
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
      <LongTextInput
        ref={inputRef}
        label={field.title}
        multiline
        numberOfLines={5}
        placeholder={field.mask}
        keyboardAppearance="dark"
        defaultValue={defaultValue}
        placeholderTextColor="#666360"
        style={{textAlignVertical: 'top'}}
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

export default InputLongText;
