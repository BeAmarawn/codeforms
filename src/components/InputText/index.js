import React, { useEffect, useRef, useState } from 'react';
import QuestionIcon from 'react-native-vector-icons/AntDesign';
import { Tooltip } from 'react-native-elements';

import { useField } from '@unform/core';
import { transformToMaskString } from '~/utils/replaceMask';

import {
  InputShortText,
  InputShortTextNoMask,
  Container,
  Title,
  ErrorTitle,
  Header,
  HintText,
} from './styles';

function InputText({ name, field, testId, ...rest }) {
  if (field.mask) {
    const inputRef = useRef(null);
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
          return ref.getRawValue();
        },
      });
    }, [fieldName, registerField]);

    return (
      <Container>
        <Title>{field.title}</Title>
        <InputShortText
          testID={testId}
          ref={inputRef}
          type="custom"
          options={{
            mask: transformToMaskString(field.mask),
            getRawValue: (v) => v.replace(/[^A-Za-z0-9]/g, ''),
          }}
          keyboardAppearance="dark"
          value={value}
          defaultValue={defaultValue}
          errorStyle={{ color: 'red', fontSize: 15 }}
          errorMessage={error}
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
      <InputShortTextNoMask
        testID={testId}
        ref={inputRef}
        keyboardAppearance="dark"
        defaultValue={defaultValue}
        errorStyle={{ color: 'red', fontSize: 15 }}
        errorMessage={error}
        placeholderTextColor="#666360"
        onChangeText={(val) => {
          if (inputRef.current) {
            inputRef.current.value = val;
          }
        }}
        {...rest}
      />
      {error && <ErrorTitle>{error}</ErrorTitle>}
    </Container>
  );
}

export default InputText;
