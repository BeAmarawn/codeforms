import React from 'react';

import { render } from '@testing-library/react-native';

import { Form } from '@unform/mobile';

import { emailField } from '../fixtures/Components/EmailField/emailInput_fieldData';

import InputEmail from '~/components/InputEmail';

describe('InputEmail component', () => {
  describe('InputEmail Title', () => {
    it('Should have a title', async () => {
      const formRef = jest.fn();

      const { getByText } = render(
        <Form ref={formRef}>
          <InputEmail name={emailField.name} field={emailField} />
        </Form>
      );

      const titleInput = getByText('E-Mail');

      expect(titleInput).toBeTruthy();
    });
    it('Should return a error because the expected title is not the same of mock', async () => {
      const formRef = jest.fn();

      const { queryByText } = render(
        <Form ref={formRef}>
          <InputEmail name={emailField.name} field={emailField} />
        </Form>
      );

      const titleInput = queryByText('G-Mail');

      expect(titleInput).toBeFalsy();
    });
  });
  describe('InputEmail Input', () => {
    it('Should have a email input', async () => {
      const formRef = jest.fn();

      const { getByTestId } = render(
        <Form ref={formRef}>
          <InputEmail
            name={emailField.name}
            field={emailField}
            testId="inputEmail_TestId"
          />
        </Form>
      );

      const renderInput = getByTestId('inputEmail_TestId');

      expect(renderInput).toBeTruthy();
    });
    it('Should return a error because the expected testId is incorrectly', async () => {
      const formRef = jest.fn();

      const { queryByTestId } = render(
        <Form ref={formRef}>
          <InputEmail
            name={emailField.name}
            testId="inputEmail_TestId"
            field={emailField}
          />
        </Form>
      );

      const titleInput = queryByTestId('inputEmail_Test');

      expect(titleInput).toBeFalsy();
    });
  });
});
