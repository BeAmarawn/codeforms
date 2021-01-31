import React, {useEffect, useRef, useState} from 'react';

import {Text} from 'react-native';
import {useField} from '@unform/core';

import {BooleanInput, Title, Container} from './styles';

function InputBoolean({name, field, ...rest}) {
  const [selected, setSelected] = useState(false);
  const inputRef = useRef(selected);

  const {fieldName, registerField, defaultValue, error} = useField(name);

  const onChange = () => {
    inputRef.current = !selected;
    setSelected(!selected);
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
      <BooleanInput
        title={field.title}
        ref={inputRef}
        checked={selected}
        onPress={onChange}
        {...rest}
      />
      {error && <Text>{error}</Text>}
    </Container>
  );
}

export default InputBoolean;
