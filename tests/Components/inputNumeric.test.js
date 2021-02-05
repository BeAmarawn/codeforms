import React from 'react';

import { render } from '@testing-library/react-native';

import { Form } from '@unform/mobile';

import { numericField } from '../fixtures/Components/NumericField/numericInput_fieldData';

import InputNumeric from '~/components/InputNumeric';

describe('InputNumeric component', () => {
  describe('InputNumeric Title', () => {
    it('Should have a title', async () => {
      const formRef = jest.fn();

      const { getByText } = render(
        <Form ref={formRef}>
          <InputNumeric name={numericField.name} field={numericField} />
        </Form>
      );

      const titleInput = getByText('Quantos pets você possui?');

      expect(titleInput).toBeTruthy();
    });
    it('Should return a error because the expected title is not the same of mock', async () => {
      const formRef = jest.fn();

      const { queryByText } = render(
        <Form ref={formRef}>
          <InputNumeric name={numericField.name} field={numericField} />
        </Form>
      );

      const titleInput = queryByText('Quantos Gatos?');

      expect(titleInput).toBeFalsy();
    });
  });
  describe('InputNumeric Input', () => {
    it('Should have a numeric input', async () => {
      const formRef = jest.fn();

      const { getByTestId } = render(
        <Form ref={formRef}>
          <InputNumeric
            name={numericField.name}
            field={numericField}
            testId="inputNumeric_TestId"
          />
        </Form>
      );

      const renderInput = getByTestId('inputNumeric_TestId');

      expect(renderInput).toBeTruthy();
    });
    it('Should return a error because the expected testId is incorrectly', async () => {
      const formRef = jest.fn();

      const { queryByTestId } = render(
        <Form ref={formRef}>
          <InputNumeric
            name={numericField.name}
            testId="inputNumeric_TestId"
            field={numericField}
          />
        </Form>
      );

      const titleInput = queryByTestId('inputNumeric_Test');

      expect(titleInput).toBeFalsy();
    });
  });
});
