import React from 'react';

import { render } from '@testing-library/react-native';

import { Form } from '@unform/mobile';

import { textField } from '../fixtures/Components/TextField/textInput_fieldData';

import InputText from '~/components/InputText';

describe('InputText component', () => {
  describe('InputText Title', () => {
    it('Should have a title', async () => {
      const formRef = jest.fn();

      const { getByText } = render(
        <Form ref={formRef}>
          <InputText name={textField.name} field={textField} />
        </Form>
      );

      const titleInput = getByText('Nome completo');

      expect(titleInput).toBeTruthy();
    });
    it('Should return a error because the expected title is not the same of mock', async () => {
      const formRef = jest.fn();

      const { queryByText } = render(
        <Form ref={formRef}>
          <InputText name={textField.name} field={textField} />
        </Form>
      );

      const titleInput = queryByText('Nomecompleto');

      expect(titleInput).toBeFalsy();
    });
  });
  describe('InputText Input', () => {
    it('Should have a input', async () => {
      const formRef = jest.fn();

      const { getByTestId } = render(
        <Form ref={formRef}>
          <InputText
            name={textField.name}
            field={textField}
            testId="input_TestId"
          />
        </Form>
      );

      const renderInput = getByTestId('input_TestId');

      expect(renderInput).toBeTruthy();
    });
    it('Should return a error because the expected testId is incorrectly', async () => {
      const formRef = jest.fn();

      const { queryByTestId } = render(
        <Form ref={formRef}>
          <InputText
            name={textField.name}
            testId="input_TestId"
            field={textField}
          />
        </Form>
      );

      const titleInput = queryByTestId('input_Test');

      expect(titleInput).toBeFalsy();
    });
  });
});
