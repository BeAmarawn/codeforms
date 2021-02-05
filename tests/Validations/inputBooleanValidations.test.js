import * as yup from 'yup';
import booleanMock from '../fixtures/Validations/booleanField.json';

import { ValidationObjectBuilder } from '~/controller/ValidationObjectBuilder';
import { createYupSchema } from '~/utils/yupSchemaCreator';

describe('Test boolean input validation', () => {
  it('Test whether Validation boolean return required rule', async () => {
    const dataToValidate = {}; // Object to represent the unform output to be validate by Yup
    const validatorObject = [ValidationObjectBuilder(booleanMock)]; // Sending the field object mock received from the api, to the function that builds a validation object compatible with YupSchema builder

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {}); // Building a valid Schema Object
    const validationSchema = yup.object().shape(yupSchemaObject); // Creating a yup schema instance

    try {
      await validationSchema.validate(dataToValidate); // This must returns a yup error instance
    } catch (error) {
      expect(error).toBeInstanceOf(yup.ValidationError); // Verification of error origin
      expect(error.errors[0]).toBe('Esse Campo é obrigatório'); // This is our error!
    }
  });

  it('Test whether validation boolean not return a error instance', async () => {
    const dataToValidate = { pets: true }; // Because this, now, the validation validate the data like a Valid data
    const validatorObject = [ValidationObjectBuilder(booleanMock)];

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {});
    const validationSchema = yup.object().shape(yupSchemaObject);

    const validationResult = await validationSchema.isValid(dataToValidate); // If the data is valid, this must return stuff like true

    expect(validationResult).toEqual(true); // This is not our error!
  });
});
