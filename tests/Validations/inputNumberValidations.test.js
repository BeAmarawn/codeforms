import * as yup from 'yup';
import minValueMock from '../fixtures/Validations/NumberField/numberField_minValue.json';
import maxValueMock from '../fixtures/Validations/NumberField/numberField_maxValue.json';
import acceptDecimalMock from '../fixtures/Validations/NumberField/numberField_acceptDecimal.json';
import regexMock from '../fixtures/Validations/NumberField/numberField_regex.json';
import requiredMock from '../fixtures/Validations/NumberField/numberField_required.json';

import { ValidationObjectBuilder } from '~/controller/ValidationObjectBuilder';
import { createYupSchema } from '~/utils/yupSchemaCreator';

describe('Test number input validation by min value', () => {
  it('Test whether Validation number return min value rule', async () => {
    const dataToValidate = { minValueTest: 8 }; // Object to represent the unform output to be validate by Yup
    const validatorObject = [ValidationObjectBuilder(minValueMock)]; // Sending the field object mock received from the api, to the function that builds a validation object compatible with YupSchema builder

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {}); // Building a valid Schema Object
    const validationSchema = yup.object().shape(yupSchemaObject); // Creating a yup schema instance

    try {
      await validationSchema.validate(dataToValidate); // This must returns a yup error instance
    } catch (error) {
      expect(error).toBeInstanceOf(yup.ValidationError); // Verification of error origin
      expect(error.errors[0]).toBe('O Valor do campo deve ser no mínimo 10'); // This is our error!
    }
  });

  it('Test whether validation number not return a error instance', async () => {
    const dataToValidate = { minValueTest: 11 }; // Because this, now, the validation validate the data like a Valid data
    const validatorObject = [ValidationObjectBuilder(minValueMock)];

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {});
    const validationSchema = yup.object().shape(yupSchemaObject);

    const validationResult = await validationSchema.isValid(dataToValidate); // If the data is valid, this must return stuff like true

    expect(validationResult).toEqual(true); // This is not our error!
  });
});

//
describe('Test number input validation by max value', () => {
  it('Test whether validation number return max Size rule', async () => {
    const dataToValidate = { verificationCode: 1000 }; // Object to represent the unform output to be validate by Yup
    const validatorObject = [ValidationObjectBuilder(maxValueMock)]; // Sending the field object mock received from the api, to the function that builds a validation object compatible with YupSchema builder

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {}); // Building a valid Schema Object
    const validationSchema = yup.object().shape(yupSchemaObject); // Creating a yup schema instance

    try {
      await validationSchema.validate(dataToValidate); // This must returns a yup error instance
    } catch (error) {
      expect(error).toBeInstanceOf(yup.ValidationError); // Verification of error origin
      expect(error.errors[0]).toBe('O Valor do campo deve ser no máximo 999'); // This is our error!
    }
  });

  it('Test whether validation number not return a error instance', async () => {
    const dataToValidate = { verificationCode: 998 }; // Because this, now, the validation validate the data like a Valid data
    const validatorObject = [ValidationObjectBuilder(maxValueMock)];

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {});
    const validationSchema = yup.object().shape(yupSchemaObject);

    const validationResult = await validationSchema.isValid(dataToValidate); // If the data is valid, this must return stuff like true

    expect(validationResult).toEqual(true); // This is not our error!
  });
});

// //
describe('Test number input validation by accept decimal', () => {
  it('Test whether Validation text return accept decimal rule', async () => {
    const dataToValidate = { childrenCount: 1.5 }; // Object to represent the unform output to be validate by Yup
    const validatorObject = [ValidationObjectBuilder(acceptDecimalMock)]; // Sending the field object mock received from the api, to the function that builds a validation object compatible with YupSchema builder

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {}); // Building a valid Schema Object
    const validationSchema = yup.object().shape(yupSchemaObject); // Creating a yup schema instance

    try {
      await validationSchema.validate(dataToValidate); // This must returns a yup error instance
    } catch (error) {
      expect(error).toBeInstanceOf(yup.ValidationError); // Verification of error origin
      expect(error.errors[0]).toBe('Esse Campo deve conter um valor inteiro'); // This is our error!
    }
  });

  it('Test whether validation number not return a error instance', async () => {
    const dataToValidate = { childrenCount: 10 }; // Because this, now, the validation validate the data like a Valid data
    const validatorObject = [ValidationObjectBuilder(acceptDecimalMock)];

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {});
    const validationSchema = yup.object().shape(yupSchemaObject);

    const validationResult = await validationSchema.isValid(dataToValidate); // If the data is valid, this must return stuff like true

    expect(validationResult).toEqual(true); // This is not our error!
  });
});

// //
describe('Test number input validation by regex', () => {
  it('Test whether Validation number return regex rule', async () => {
    const dataToValidate = { creditCard: 541369567052 }; // Object to represent the unform output to be validate by Yup
    const validatorObject = [ValidationObjectBuilder(regexMock)]; // Sending the field object mock received from the api, to the function that builds a validation object compatible with YupSchema builder

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {}); // Building a valid Schema Object
    const validationSchema = yup.object().shape(yupSchemaObject); // Creating a yup schema instance

    try {
      await validationSchema.validate(dataToValidate); // This must returns a yup error instance
    } catch (error) {
      expect(error).toBeInstanceOf(yup.ValidationError); // Verification of error origin
      expect(error.errors[0]).toBe(
        'O valor inserido no campo não fornece o formato específico necessário'
      ); // This is our error!
    }
  });

  it('Test whether validation number not return a error instance', async () => {
    const dataToValidate = { creditCard: 5413695670524658 }; // Because this, now, the validation validate the data like a Valid data
    const validatorObject = [ValidationObjectBuilder(regexMock)];

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {});
    const validationSchema = yup.object().shape(yupSchemaObject);

    const validationResult = await validationSchema.isValid(dataToValidate); // If the data is valid, this must return stuff like true

    expect(validationResult).toEqual(true); // This is not our error!
  });
});

// //
describe('Test number input validation required', () => {
  it('Test whether Validation number return required rule', async () => {
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

  it('Test whether validation number not return a error instance', async () => {
    const dataToValidate = { verificationCode: 92892 }; // Because this, now, the validation validate the data like a Valid data
    const validatorObject = [ValidationObjectBuilder(requiredMock)];

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {});
    const validationSchema = yup.object().shape(yupSchemaObject);

    const validationResult = await validationSchema.isValid(dataToValidate); // If the data is valid, this must return stuff like true

    expect(validationResult).toEqual(true); // This is not our error!
  });
});
