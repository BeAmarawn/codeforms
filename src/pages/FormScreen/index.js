import React, { useRef } from 'react';
import { ScrollView, Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import ProgressIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Form } from '@unform/mobile';
import * as yup from 'yup';

import { saveProgressForm, signOut } from '~/store/modules/formState/actions';

import { specificInputReturner } from '~/controller/FormTypeController';
import { ValidationObjectBuilder } from '~/controller/ValidationObjectBuilder';
import { createYupSchema } from '~/utils/yupSchemaCreator';

import {
  Container,
  PrincipalText,
  ButtonText,
  EnterButton,
  Header,
  SaveProgressButton,
  ExitButton,
  SaveProgressAndExitButtonText,
} from './styles';

const FormScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { formData, formPreviouslyProgress } = route.params;
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      const validationObject = formData.fields.map((item) =>
        ValidationObjectBuilder(item)
      );
      const finalValidationObject = validationObject.filter(
        (item) => item !== undefined
      );

      const yupSchema = finalValidationObject.reduce(createYupSchema, {});
      const validateSchema = yup.object().shape(yupSchema);

      await validateSchema.validate(data, {
        abortEarly: false,
      });
      console.tron.log('Validations All Ok', finalValidationObject);
      formRef.current.setErrors({});
      console.tron.log('Form Answer', data);
    } catch (err) {
      const validationErrors = {};

      if (err instanceof yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
        console.tron.log('Validations Fails', validationErrors);
        console.tron.log('Form Answer', data);
      }
    }
  }

  function handleSaveProgress() {
    const formAnswers = formRef.current.getData();
    dispatch(saveProgressForm(formAnswers));
    Alert.alert('', 'Progresso Salvo!');
    console.tron.log('Form Progress Saved!', formAnswers);
  }

  function handleLeaveForm() {
    dispatch(signOut());
    Alert.alert('', 'Progresso Eliminado!');
  }

  return (
    <Container>
      <ScrollView>
        <Header>
          <SaveProgressButton onPress={() => handleSaveProgress()}>
            <ProgressIcon name="progress-check" size={30} color="#fff" />
            <SaveProgressAndExitButtonText>
              Salvar Progresso
            </SaveProgressAndExitButtonText>
          </SaveProgressButton>
          <ExitButton onPress={() => handleLeaveForm()}>
            <ProgressIcon name="exit-run" size={30} color="#fff" />
            <SaveProgressAndExitButtonText>
              Abandonar Form
            </SaveProgressAndExitButtonText>
          </ExitButton>
        </Header>
        <PrincipalText>{formData.title}</PrincipalText>
        <Form
          ref={formRef}
          initialData={formPreviouslyProgress}
          onSubmit={handleSubmit}
        >
          {formData.fields.map((field) =>
            specificInputReturner(field, field.name)
          )}
          <EnterButton onPress={() => formRef.current.submitForm()}>
            <ButtonText>{formData.submitButtonText}</ButtonText>
          </EnterButton>
        </Form>
      </ScrollView>
    </Container>
  );
};

export default FormScreen;
