import React from 'react';

import { render } from '@testing-library/react-native';

import { Form } from '@unform/mobile';

import { longTextField } from '../fixtures/Components/LongTextField/longTextInput_fieldData';

import InputLongText from '~/components/InputLongText';

describe('InputLongText component', () => {
  describe('InputLongText Title', () => {
    it('Should have a title', async () => {
      const formRef = jest.fn();

      const { getByText } = render(
        <Form ref={formRef}>
          <InputLongText name={longTextField.name} field={longTextField} />
        </Form>
      );

      const titleInput = getByText('Descrição');

      expect(titleInput).toBeTruthy();
    });
    it('Should return a error because the expected title is not the same of mock', async () => {
      const formRef = jest.fn();

      const { queryByText } = render(
        <Form ref={formRef}>
          <InputLongText name={longTextField.name} field={longTextField} />
        </Form>
      );

      const titleInput = queryByText('DescrisErro');

      expect(titleInput).toBeFalsy();
    });
  });
  describe('InputLongText Input', () => {
    it('Should have a long text input', async () => {
      const formRef = jest.fn();

      const { getByTestId } = render(
        <Form ref={formRef}>
          <InputLongText
            name={longTextField.name}
            field={longTextField}
            testId="inputLong_TestId"
          />
        </Form>
      );

      const renderInput = getByTestId('inputLong_TestId');

      expect(renderInput).toBeTruthy();
    });
    it('Should return a error because the expected testId is incorrectly', async () => {
      const formRef = jest.fn();

      const { queryByTestId } = render(
        <Form ref={formRef}>
          <InputLongText
            name={longTextField.name}
            testId="inputLong_TestId"
            field={longTextField}
          />
        </Form>
      );

      const titleInput = queryByTestId('inputLong_Test');

      expect(titleInput).toBeFalsy();
    });
  });
});
