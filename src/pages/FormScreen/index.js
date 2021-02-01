import React, { useRef } from 'react';
import { ScrollView } from 'react-native';
import { Form } from '@unform/mobile';
import * as yup from 'yup';

import { specificInputReturner } from '~/controller/FormTypeController';
import { ValidationObjectBuilder } from '~/controller/ValidationObjectBuilder';
import { createYupSchema } from '~/utils/yupSchemaCreator';

import { Container, PrincipalText, ButtonText, EnterButton } from './styles';

const FormScreen = ({ route, navigation }) => {
  const { formData } = route.params;
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
    } catch (err) {
      const validationErrors = {};

      if (err instanceof yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <Container>
      <ScrollView>
        <PrincipalText>{formData.title}</PrincipalText>
        <Form ref={formRef} onSubmit={handleSubmit}>
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
