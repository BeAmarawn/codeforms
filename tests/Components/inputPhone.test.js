import React from 'react';

import { render } from '@testing-library/react-native';

import { Form } from '@unform/mobile';

import { phoneField } from '../fixtures/Components/PhoneField/phoneInput_fieldData';

import InputPhone from '~/components/InputPhone';

describe('InputPhone component', () => {
  describe('InputPhone Title', () => {
    it('Should have a title', async () => {
      const formRef = jest.fn();

      const { getByText } = render(
        <Form ref={formRef}>
          <InputPhone name={phoneField.name} field={phoneField} />
        </Form>
      );

      const titleInput = getByText('Telefone');

      expect(titleInput).toBeTruthy();
    });
    it('Should return a error because the expected title is not the same of mock', async () => {
      const formRef = jest.fn();

      const { queryByText } = render(
        <Form ref={formRef}>
          <InputPhone name={phoneField.name} field={phoneField} />
        </Form>
      );

      const titleInput = queryByText('Celular');

      expect(titleInput).toBeFalsy();
    });
  });
  describe('InputPhone Input', () => {
    it('Should have a phone input', async () => {
      const formRef = jest.fn();

      const { getByTestId } = render(
        <Form ref={formRef}>
          <InputPhone
            name={phoneField.name}
            field={phoneField}
            testId="inputPhone_TestId"
          />
        </Form>
      );

      const renderInput = getByTestId('inputPhone_TestId');

      expect(renderInput).toBeTruthy();
    });
    it('Should return a error because the expected testId is incorrectly', async () => {
      const formRef = jest.fn();

      const { queryByTestId } = render(
        <Form ref={formRef}>
          <InputPhone
            name={phoneField.name}
            testId="inputPhone_TestId"
            field={phoneField}
          />
        </Form>
      );

      const titleInput = queryByTestId('inputPhone_Test');

      expect(titleInput).toBeFalsy();
    });
  });
});
