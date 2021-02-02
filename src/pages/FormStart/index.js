import React from 'react';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native';

import {
  Container,
  PrincipalText,
  ButtonText,
  EnterButton,
  DescriptionText,
  DueDateText,
  ProgressIndicatorHeader,
  HeaderText,
} from './styles';

const FormStart = ({ route, navigation }) => {
  const formData = useSelector((state) => state.formState.formData);
  const formPreviouslyProgress = useSelector(
    (state) => state.formState.formProgress
  );

  function handleStart() {
    navigation.navigate('FormScreen', { formData, formPreviouslyProgress });
  }

  function formatDueDate(date) {
    const expirationDate = new Date(date);
    function addZero(number) {
      if (number <= 9) return `0${number}`;
      return number;
    }
    return `${addZero(expirationDate.getUTCFullYear())}/${addZero(
      expirationDate.getUTCMonth()
    )}/${addZero(expirationDate.getUTCDay())}`;
  }

  return (
    <Container>
      <ScrollView>
        {Object.keys(formPreviouslyProgress).length === 0 ? (
          <ProgressIndicatorHeader style={{ backgroundColor: '#6714b7' }} />
        ) : (
          <ProgressIndicatorHeader>
            <HeaderText>Progresso anterior detectado!</HeaderText>
          </ProgressIndicatorHeader>
        )}

        <DueDateText>
          Data de Validade:{' '}
          {formData.dueDate
            ? formatDueDate(formData.dueDate)
            : 'Sem data de expiração'}
        </DueDateText>

        <PrincipalText>{formData.title}</PrincipalText>
        <DescriptionText>{formData.description}</DescriptionText>
        <EnterButton onPress={() => handleStart()}>
          <ButtonText>
            {Object.keys(formPreviouslyProgress).length === 0
              ? 'Iniciar'
              : 'Continuar'}
          </ButtonText>
        </EnterButton>
      </ScrollView>
    </Container>
  );
};

export default FormStart;
