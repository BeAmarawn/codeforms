import * as yup from 'yup';
import requiredMock from '../fixtures/Validations/DateField/dateField_required.json';
import dateMaxMock from '../fixtures/Validations/DateField/dateField_maxDate.json';
import dateMinMock from '../fixtures/Validations/DateField/dateField_minDate.json';

import { ValidationObjectBuilder } from '~/controller/ValidationObjectBuilder';
import { createYupSchema } from '~/utils/yupSchemaCreator';

describe('Test date input validation', () => {
  it('Test whether Validation date return min date rule', async () => {
    const dataToValidate = { movingDate: '2021-01-14T03:00:00.000Z' }; // Object to represent the unform output to be validate by Yup
    const validatorObject = [ValidationObjectBuilder(dateMinMock)]; // Sending the field object mock received from the api, to the function that builds a validation object compatible with YupSchema builder

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {}); // Building a valid Schema Object
    const validationSchema = yup.object().shape(yupSchemaObject); // Creating a yup schema instance

    try {
      await validationSchema.validate(dataToValidate); // This must returns a yup error instance
    } catch (error) {
      expect(error).toBeInstanceOf(yup.ValidationError); // Verification of error origin
      expect(error.errors[0]).toBe('A data mínima permitida é, 01/02/2021'); // This is our error!
    }
  });

  it('Test whether validation date not return a error instance', async () => {
    const dataToValidate = { movingDate: '2021-02-03T03:00:00.000Z' }; // Because this, now, the validation validate the data like a Valid data
    const validatorObject = [ValidationObjectBuilder(dateMinMock)];

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {});
    const validationSchema = yup.object().shape(yupSchemaObject);

    const validationResult = await validationSchema.isValid(dataToValidate); // If the data is valid, this must return stuff like true

    expect(validationResult).toEqual(true); // This is not our error!
  });
});

describe('Test date input validation', () => {
  it('Test whether Validation date return max date rule', async () => {
    const dataToValidate = { movingDate: '2021-06-14T03:00:00.000Z' }; // Object to represent the unform output to be validate by Yup
    const validatorObject = [ValidationObjectBuilder(dateMaxMock)]; // Sending the field object mock received from the api, to the function that builds a validation object compatible with YupSchema builder

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {}); // Building a valid Schema Object
    const validationSchema = yup.object().shape(yupSchemaObject); // Creating a yup schema instance

    try {
      await validationSchema.validate(dataToValidate); // This must returns a yup error instance
    } catch (error) {
      expect(error).toBeInstanceOf(yup.ValidationError); // Verification of error origin
      expect(error.errors[0]).toBe('A data máxima permitida é, 01/02/2021'); // This is our error!
    }
  });

  it('Test whether validation date not return a error instance', async () => {
    const dataToValidate = { movingDate: '2021-01-30T03:00:00.000Z' }; // Because this, now, the validation validate the data like a Valid data
    const validatorObject = [ValidationObjectBuilder(dateMaxMock)];

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {});
    const validationSchema = yup.object().shape(yupSchemaObject);

    const validationResult = await validationSchema.isValid(dataToValidate); // If the data is valid, this must return stuff like true

    expect(validationResult).toEqual(true); // This is not our error!
  });
});
describe('Test date input validation', () => {
  it('Test whether Validation date return required rule', async () => {
    const dataToValidate = {}; // Object to represent the unform output to be validate by Yup
    const validatorObject = [ValidationObjectBuilder(requiredMock)]; // Sending the field object mock received from the api, to the function that builds a validation object compatible with YupSchema builder

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {}); // Building a valid Schema Object
    const validationSchema = yup.object().shape(yupSchemaObject); // Creating a yup schema instance

    try {
      await validationSchema.validate(dataToValidate); // This must returns a yup error instance
    } catch (error) {
      expect(error).toBeInstanceOf(yup.ValidationError); // Verification of error origin
      expect(error.errors[0]).toBe('Esse Campo é obrigatório'); // This is our error!
    }
  });

  it('Test whether validation date not return a error instance', async () => {
    const dataToValidate = { movingDate: '2021-06-14T03:00:00.000Z' }; // Because this, now, the validation validate the data like a Valid data
    const validatorObject = [ValidationObjectBuilder(requiredMock)];

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {});
    const validationSchema = yup.object().shape(yupSchemaObject);

    const validationResult = await validationSchema.isValid(dataToValidate); // If the data is valid, this must return stuff like true

    expect(validationResult).toEqual(true); // This is not our error!
  });
});
