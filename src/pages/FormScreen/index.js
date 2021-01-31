import React, {useRef} from 'react';
import {ScrollView} from 'react-native';
import {Form} from '@unform/mobile';

import {specificInputReturner} from '~/controller/FormTypeController';

import {Container, PrincipalText, ButtonText, EnterButton} from './styles';

const FormScreen = ({route, navigation}) => {
  const {formData} = route.params;
  const formRef = useRef(null);

  function handleSubmit(data) {
    // console.tron.log(formData);
    // console.tron.log(data);
  }

  return (
    <Container>
      <ScrollView>
        <PrincipalText>{formData.title}</PrincipalText>
        <Form ref={formRef} onSubmit={handleSubmit}>
          {formData.fields.map((field) =>
            specificInputReturner(field, field.name),
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
