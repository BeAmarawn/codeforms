import React from 'react';
import {ScrollView} from 'react-native';

import {
  Container,
  PrincipalText,
  ButtonText,
  EnterButton,
  DescriptionText,
  DueDateText,
} from './styles';

const FormStart = ({route, navigation}) => {
  const {formData} = route.params;

  function handleStart() {
    navigation.navigate('FormScreen', {formData});
  }

  function formatDueDate(date) {
    const expirationDate = new Date(date);
    function addZero(number) {
      if (number <= 9) return `0${number}`;
      return number;
    }
    return `${addZero(expirationDate.getUTCFullYear())}/${addZero(
      expirationDate.getUTCMonth(),
    )}/${addZero(expirationDate.getUTCDay())}`;
  }

  return (
    <Container>
      <ScrollView>
        <DueDateText>
          Data de Validade:{' '}
          {formData.dueDate
            ? formatDueDate(formData.dueDate)
            : 'Sem data de expiração'}
        </DueDateText>

        <PrincipalText>{formData.title}</PrincipalText>
        <DescriptionText>{formData.description}</DescriptionText>
        <EnterButton onPress={() => handleStart()}>
          <ButtonText>Começar</ButtonText>
        </EnterButton>
      </ScrollView>
    </Container>
  );
};

export default FormStart;
