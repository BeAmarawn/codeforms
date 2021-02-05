import * as yup from 'yup';
import sizeMock from '../fixtures/Validations/LongTextField/longTextField_size.json';
import minSizeMock from '../fixtures/Validations/LongTextField/longTextField_minSize.json';
import maxSizeMock from '../fixtures/Validations/LongTextField/longTextField_maxSize.json';
import minWordsMock from '../fixtures/Validations/LongTextField/longTextField_minWords.json';
import maxWordsMock from '../fixtures/Validations/LongTextField/longTextField_maxWords.json';
import onlyRequiredMock from '../fixtures/Validations/LongTextField/longTextField_required.json';

import { ValidationObjectBuilder } from '~/controller/ValidationObjectBuilder';
import { createYupSchema } from '~/utils/yupSchemaCreator';

describe('Test Long Text input validation by size', () => {
  it('Test whether Validation long text return size rule', async () => {
    const dataToValidate = { description: 'The tes' }; // Object to represent the unform output to be validate by Yup
    const validatorObject = [ValidationObjectBuilder(sizeMock)]; // Sending the field object mock received from the api, to the function that builds a validation object compatible with YupSchema builder

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {}); // Building a valid Schema Object
    const validationSchema = yup.object().shape(yupSchemaObject); // Creating a yup schema instance

    try {
      await validationSchema.validate(dataToValidate); // This must returns a yup error instance
    } catch (error) {
      expect(error).toBeInstanceOf(yup.ValidationError); // Verification of error origin
      expect(error.errors[0]).toBe('O Campo deve possuir 8 caracteres'); // This is our error!
    }
  });

  it('Test whether validation long Text not return a error instance', async () => {
    const dataToValidate = { description: 'The test' }; // Because this, now, the validation validate the data like a Valid data
    const validatorObject = [ValidationObjectBuilder(sizeMock)];

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {});
    const validationSchema = yup.object().shape(yupSchemaObject);

    const validationResult = await validationSchema.isValid(dataToValidate); // If the data is valid, this must return stuff like true

    expect(validationResult).toEqual(true); // This is not our error!
  });
});

//
describe('Test Long Text input validation by min Size', () => {
  it('Test whether validation long text return min Size rule', async () => {
    const dataToValidate = { description: 'Th t' }; // Object to represent the unform output to be validate by Yup
    const validatorObject = [ValidationObjectBuilder(minSizeMock)]; // Sending the field object mock received from the api, to the function that builds a validation object compatible with YupSchema builder

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {}); // Building a valid Schema Object
    const validationSchema = yup.object().shape(yupSchemaObject); // Creating a yup schema instance

    try {
      await validationSchema.validate(dataToValidate); // This must returns a yup error instance
    } catch (error) {
      expect(error).toBeInstanceOf(yup.ValidationError); // Verification of error origin
      expect(error.errors[0]).toBe(
        'O Campo deve possuir no mínimo 5 caracteres'
      ); // This is our error!
    }
  });

  it('Test whether validation long Text not return a error instance', async () => {
    const dataToValidate = { description: 'The test' }; // Because this, now, the validation validate the data like a Valid data
    const validatorObject = [ValidationObjectBuilder(minSizeMock)];

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {});
    const validationSchema = yup.object().shape(yupSchemaObject);

    const validationResult = await validationSchema.isValid(dataToValidate); // If the data is valid, this must return stuff like true

    expect(validationResult).toEqual(true); // This is not our error!
  });
});

// //
describe('Test Long Text input validation by max Size', () => {
  it('Test whether Validation long text return max size rule', async () => {
    const dataToValidate = { description: 'The test' }; // Object to represent the unform output to be validate by Yup
    const validatorObject = [ValidationObjectBuilder(maxSizeMock)]; // Sending the field object mock received from the api, to the function that builds a validation object compatible with YupSchema builder

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {}); // Building a valid Schema Object
    const validationSchema = yup.object().shape(yupSchemaObject); // Creating a yup schema instance

    try {
      await validationSchema.validate(dataToValidate); // This must returns a yup error instance
    } catch (error) {
      expect(error).toBeInstanceOf(yup.ValidationError); // Verification of error origin
      expect(error.errors[0]).toBe(
        'O Campo deve possuir no máximo 6 caracteres'
      ); // This is our error!
    }
  });

  it('Test whether validation long Text not return a error instance', async () => {
    const dataToValidate = { description: 'The t' }; // Because this, now, the validation validate the data like a Valid data
    const validatorObject = [ValidationObjectBuilder(maxSizeMock)];

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {});
    const validationSchema = yup.object().shape(yupSchemaObject);

    const validationResult = await validationSchema.isValid(dataToValidate); // If the data is valid, this must return stuff like true

    expect(validationResult).toEqual(true); // This is not our error!
  });
});

// //
describe('Test Long Text input validation by min Words', () => {
  it('Test whether Validation long text return min words rule', async () => {
    const dataToValidate = { description: 'The test' }; // Object to represent the unform output to be validate by Yup
    const validatorObject = [ValidationObjectBuilder(minWordsMock)]; // Sending the field object mock received from the api, to the function that builds a validation object compatible with YupSchema builder

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {}); // Building a valid Schema Object
    const validationSchema = yup.object().shape(yupSchemaObject); // Creating a yup schema instance

    try {
      await validationSchema.validate(dataToValidate); // This must returns a yup error instance
    } catch (error) {
      expect(error).toBeInstanceOf(yup.ValidationError); // Verification of error origin
      expect(error.errors[0]).toBe('O Campo deve possuir no mínimo 3 palavras'); // This is our error!
    }
  });

  it('Test whether validation long Text not return a error instance', async () => {
    const dataToValidate = { description: 'The test passed' }; // Because this, now, the validation validate the data like a Valid data
    const validatorObject = [ValidationObjectBuilder(minWordsMock)];

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {});
    const validationSchema = yup.object().shape(yupSchemaObject);

    const validationResult = await validationSchema.isValid(dataToValidate); // If the data is valid, this must return stuff like true

    expect(validationResult).toEqual(true); // This is not our error!
  });
});

// //
describe('Test Long Text input validation max Words', () => {
  it('Test whether Validation long text return max words rule', async () => {
    const dataToValidate = { description: 'The test not passed' }; // Object to represent the unform output to be validate by Yup
    const validatorObject = [ValidationObjectBuilder(maxWordsMock)]; // Sending the field object mock received from the api, to the function that builds a validation object compatible with YupSchema builder

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {}); // Building a valid Schema Object
    const validationSchema = yup.object().shape(yupSchemaObject); // Creating a yup schema instance

    try {
      await validationSchema.validate(dataToValidate); // This must returns a yup error instance
    } catch (error) {
      expect(error).toBeInstanceOf(yup.ValidationError); // Verification of error origin
      expect(error.errors[0]).toBe('O Campo deve possuir no máximo 2 palavras'); // This is our error!
    }
  });

  it('Test whether validation long text not return a error instance', async () => {
    const dataToValidate = { description: 'The' }; // Because this, now, the validation validate the data like a Valid data
    const validatorObject = [ValidationObjectBuilder(maxWordsMock)];

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {});
    const validationSchema = yup.object().shape(yupSchemaObject);

    const validationResult = await validationSchema.isValid(dataToValidate); // If the data is valid, this must return stuff like true

    expect(validationResult).toEqual(true); // This is not our error!
  });
});

// //
describe('Test Long text input validation only required', () => {
  it('Test whether Validation long text return required rule', async () => {
    const dataToValidate = {}; // Object to represent the unform output to be validate by Yup
    const validatorObject = [ValidationObjectBuilder(onlyRequiredMock)]; // Sending the field object mock received from the api, to the function that builds a validation object compatible with YupSchema builder

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {}); // Building a valid Schema Object
    const validationSchema = yup.object().shape(yupSchemaObject); // Creating a yup schema instance

    try {
      await validationSchema.validate(dataToValidate); // This must returns a yup error instance
    } catch (error) {
      expect(error).toBeInstanceOf(yup.ValidationError); // Verification of error origin
      expect(error.errors[0]).toBe('Esse Campo é obrigatório'); // This is our error!
    }
  });

  it('Test whether validation long text not return a error instance', async () => {
    const dataToValidate = { description: 'The test' }; // Because this, now, the validation validate the data like a Valid data
    const validatorObject = [ValidationObjectBuilder(onlyRequiredMock)];

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {});
    const validationSchema = yup.object().shape(yupSchemaObject);

    const validationResult = await validationSchema.isValid(dataToValidate); // If the data is valid, this must return stuff like true

    expect(validationResult).toEqual(true); // This is not our error!
  });
});
