import * as yup from 'yup';
import optionField from '../fixtures/Validations/optionField.json';

import { ValidationObjectBuilder } from '~/controller/ValidationObjectBuilder';
import { createYupSchema } from '~/utils/yupSchemaCreator';

describe('Test options input validation', () => {
  it('Test whether Validation Option return required rule', async () => {
    const dataToValidate = {}; // Object to represent the unform output to be validate by Yup
    const validatorObject = [ValidationObjectBuilder(optionField)]; // Sending the field object mock received from the api, to the function that builds a validation object compatible with YupSchema builder

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {}); // Building a valid Schema Object
    const validationSchema = yup.object().shape(yupSchemaObject); // Creating a yup schema instance

    try {
      await validationSchema.validate(dataToValidate); // This must returns a yup error instance
    } catch (error) {
      expect(error).toBeInstanceOf(yup.ValidationError); // Verification of error origin
      expect(error.errors[0]).toBe('Esse Campo é obrigatório'); // This is our error!
    }
  });

  it('Test whether validation options not return a error instance', async () => {
    const dataToValidate = { level: 0 }; // Because this, now, the validation validate the data like a Valid data
    const validatorObject = [ValidationObjectBuilder(optionField)];

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {});
    const validationSchema = yup.object().shape(yupSchemaObject);

    try {
      const validationResult = await validationSchema.isValid(dataToValidate); // If the data is valid, this must return stuff like true

      expect(validationResult).toEqual(true); // This is not our error!
    } catch (error) {
      expect(error.errors[0]).toBe('Esse Campo é obrigatório');
      expect(error).toBeInstanceOf(yup.ValidationError);
    }
  });
});
