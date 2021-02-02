import React, { useEffect, useRef, useState } from 'react';

import DatePicker from 'react-native-modern-datepicker';

import { Text } from 'react-native';
import { useField } from '@unform/core';

import { Title, Container } from './styles';

function InputDate({ name, field, ...rest }) {
  const [selectedDate, setSelectedDate] = useState(undefined);

  const { fieldName, registerField, error } = useField(name);

  const datePickerRef = useRef(selectedDate);

  const onChange = (value) => {
    const toDate = (dateStr) => {
      const [year, month, day] = dateStr.split('/');
      return new Date(year, month - 1, day);
    };
    datePickerRef.current = toDate(value);
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
        style={{ marginbottom: 15 }}
        onDateChange={onChange}
        mode="calendar"
        onSelectedChange={(d) => setSelectedDate(d)}
        {...rest}
      />

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

export default InputDate;
