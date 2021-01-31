import React, {useEffect, useRef, useState} from 'react';

import DatePicker from 'react-native-modern-datepicker';

import {Text} from 'react-native';
import {useField} from '@unform/core';

import {Title, Container} from './styles';

function InputDate({name, field, ...rest}) {
  const [selectedDate, setSelectedDate] = useState('');

  const {fieldName, registerField, error} = useField(name);

  const datePickerRef = useRef(selectedDate);

  const onChange = (value) => {
    datePickerRef.current = value;
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datePickerRef.current,
      path: 'value',
      getValue() {
        return datePickerRef.current;
      },
      clearValue(ref) {
        ref.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Title>{field.title}</Title>
      <DatePicker
        options={{
          mainColor: '#A75DF2',
          borderColor: 'rgba(122, 146, 165, 0.1)',
        }}
        ref={datePickerRef}
        style={{marginbottom: 15}}
        onDateChange={onChange}
        mode="calendar"
        onSelectedChange={(d) => setSelectedDate(d)}
        {...rest}
      />

      {error && <Text>{error}</Text>}
    </Container>
  );
}

export default InputDate;
