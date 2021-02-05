import React, { useEffect, useRef } from 'react';
import QuestionIcon from 'react-native-vector-icons/AntDesign';
import { Tooltip } from 'react-native-elements';

import { Text } from 'react-native';
import { useField } from '@unform/core';

import { LongTextInput, Container, Header, HintText, Title } from './styles';

function InputLongText({ name, field, testId, ...rest }) {
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
      <LongTextInput
        testID={testId}
        ref={inputRef}
        multiline
        numberOfLines={5}
        placeholder={field.mask}
        keyboardAppearance="dark"
        errorStyle={{ color: 'red', fontSize: 15 }}
        errorMessage={error}
        defaultValue={defaultValue}
        placeholderTextColor="#666360"
        style={{ textAlignVertical: 'top' }}
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

export default InputLongText;
