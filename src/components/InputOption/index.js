import React, { useEffect, useRef, useState } from 'react';
import QuestionIcon from 'react-native-vector-icons/AntDesign';
import { Tooltip } from 'react-native-elements';

import { Text } from 'react-native';
import { useField } from '@unform/core';

import { BooleanInput, Title, Container, HintText, Header } from './styles';

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
    if (defaultValue) {
      setSelected(defaultValue);
    }
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
