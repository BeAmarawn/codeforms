import React, { useEffect, useRef, useState } from 'react';
import QuestionIcon from 'react-native-vector-icons/AntDesign';
import { Tooltip } from 'react-native-elements';

import { useField } from '@unform/core';
import { transformToMaskString } from '~/utils/replaceMask';

import {
  PhoneInput,
  Container,
  Title,
  ErrorTitle,
  Header,
  HintText,
} from './styles';

function InputPhone({ name, field, testId, ...rest }) {
  const inputRef = useRef();
  const [value, setValue] = useState('');

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    inputRef.current.value = defaultValue;
    setValue(defaultValue);
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
      <PhoneInput
        testID={testId}
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
