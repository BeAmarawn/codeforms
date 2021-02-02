import React, { useEffect, useRef, useState } from 'react';
import QuestionIcon from 'react-native-vector-icons/AntDesign';
import { Tooltip } from 'react-native-elements';

import { Text, FlatList } from 'react-native';
import { useField } from '@unform/core';

import { BooleanInput, Title, Container, Header, HintText } from './styles';

function InputMultiple({ name, field, ...rest }) {
  const toMultipleStateArray = (arr) => {
    const multipleState = arr.map((item) => ({ ...item, isSelected: false }));
    return multipleState;
  };
  const [selected, setSelected] = useState(toMultipleStateArray(field.choices));
  const [toRefresh, setRefresh] = useState(true);
  const inputRef = useRef(selected);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  const onChange = (item, index) => {
    const valueList = selected;
    if (valueList[index].isSelected) {
      valueList[index].isSelected = false;
      inputRef.current = valueList.filter((i) => i.isSelected === true);
      setSelected(valueList);
      setRefresh(!toRefresh);
    } else {
      valueList[index].isSelected = true;
      inputRef.current = valueList.filter((i) => i.isSelected === true);
      setSelected(valueList);
      setRefresh(!toRefresh);
    }
  };

  const renderItem = ({ item, index }) => (
    <BooleanInput
      key={item.value}
      title={item.name}
      ref={inputRef}
      checked={selected[index].isSelected}
      onPress={() => onChange(item, index)}
      {...rest}
    />
  );

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
      <FlatList
        extraData={toRefresh}
        data={selected}
        renderItem={renderItem}
        keyExtractor={(item) => item.value}
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

export default InputMultiple;
