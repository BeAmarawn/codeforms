import React, { useEffect, useRef } from 'react';
import QuestionIcon from 'react-native-vector-icons/AntDesign';
import { Tooltip } from 'react-native-elements';

import { useField } from '@unform/core';

import { EmailInput, Container, Title, Header, HintText } from './styles';

function InputEmail({ name, field, ...rest }) {
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
      <Header>
        <Title>{field.title}</Title>
        {field.hint && (
          <Tooltip
            containerStyle={{ height: 'auto' }}
            backgroundColor="#a75df2"
            popover={<HintText>{field.hint}</HintText>}
          >
            <QuestionIcon name="questioncircle" size={25} color="#6714b7" />
          </Tooltip>
        )}
      </Header>
      <EmailInput
        ref={inputRef}
        placeholder={field.mask}
        keyboardAppearance="dark"
        errorStyle={{ color: 'red', fontSize: 15 }}
        errorMessage={error}
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
    </Container>
  );
}

export default InputEmail;
