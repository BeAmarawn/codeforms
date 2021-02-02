import React, { useEffect, useRef, useState } from 'react';

import { Text } from 'react-native';
import { useField } from '@unform/core';

import { BooleanInput, Title, Container } from './styles';

function InputOption({ name, field, ...rest }) {
  const [selected, setSelected] = useState({ value: null });
  const inputRef = useRef(selected);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  const onChange = (item) => {
    inputRef.current = { value: item.value };
    setSelected({ value: item.value });
  };

  useEffect(() => {
    inputRef.current = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue(ref) {
        ref.clear();
      },
      getValue() {
        return inputRef.current;
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Title>{field.title}</Title>
      {field.choices.map((item) => (
        <BooleanInput
          key={item.value}
          title={item.name}
          ref={inputRef}
          checked={selected.value === item.value}
          onPress={() => onChange(item)}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          {...rest}
        />
      ))}
      {error && (
        <Text
          style={{
            color: 'red',
            fontSize: 15,
            marginLeft: 10,
            marginBottom: 10,
          }}
        >
          {error}
        </Text>
      )}
    </Container>
  );
}

export default InputOption;
