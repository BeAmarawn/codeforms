import * as yup from 'yup';
import sizeMock from '../fixtures/Validations/TextField/textField_size.json';
import minSizeMock from '../fixtures/Validations/TextField/textField_minSize.json';
import maxSizeMock from '../fixtures/Validations/TextField/textField_maxSize.json';
import minWordsMock from '../fixtures/Validations/TextField/textField_minWords.json';
import maxWordsMock from '../fixtures/Validations/TextField/textField_maxWords.json';
import onlyRequiredMock from '../fixtures/Validations/TextField/textField_required.json';

import { ValidationObjectBuilder } from '~/controller/ValidationObjectBuilder';
import { createYupSchema } from '~/utils/yupSchemaCreator';

describe('Test Text input validation by size', () => {
  it('Test whether Validation text return size rule', async () => {
    const dataToValidate = { name: 'The tes' }; // Object to represent the unform output to be validate by Yup
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

  it('Test whether validation Text not return a error instance', async () => {
    const dataToValidate = { name: 'The test' }; // Because this, now, the validation validate the data like a Valid data
    const validatorObject = [ValidationObjectBuilder(sizeMock)];

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {});
    const validationSchema = yup.object().shape(yupSchemaObject);

    const validationResult = await validationSchema.isValid(dataToValidate); // If the data is valid, this must return stuff like true

    expect(validationResult).toEqual(true); // This is not our error!
  });
});

//
describe('Test Text input validation by min Size', () => {
  it('Test whether validation text return min Size rule', async () => {
    const dataToValidate = { name: 'Th t' }; // Object to represent the unform output to be validate by Yup
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

  it('Test whether validation Text not return a error instance', async () => {
    const dataToValidate = { name: 'The test' }; // Because this, now, the validation validate the data like a Valid data
    const validatorObject = [ValidationObjectBuilder(minSizeMock)];

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {});
    const validationSchema = yup.object().shape(yupSchemaObject);

    const validationResult = await validationSchema.isValid(dataToValidate); // If the data is valid, this must return stuff like true

    expect(validationResult).toEqual(true); // This is not our error!
  });
});

// //
describe('Test Text input validation by max Size', () => {
  it('Test whether Validation text return max size rule', async () => {
    const dataToValidate = { name: 'The test' }; // Object to represent the unform output to be validate by Yup
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

  it('Test whether validation Text not return a error instance', async () => {
    const dataToValidate = { name: 'The t' }; // Because this, now, the validation validate the data like a Valid data
    const validatorObject = [ValidationObjectBuilder(maxSizeMock)];

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {});
    const validationSchema = yup.object().shape(yupSchemaObject);

    const validationResult = await validationSchema.isValid(dataToValidate); // If the data is valid, this must return stuff like true

    expect(validationResult).toEqual(true); // This is not our error!
  });
});

// //
describe('Test Text input validation by min Words', () => {
  it('Test whether Validation text return min words rule', async () => {
    const dataToValidate = { name: 'The test' }; // Object to represent the unform output to be validate by Yup
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

  it('Test whether validation Text not return a error instance', async () => {
    const dataToValidate = { name: 'The test passed' }; // Because this, now, the validation validate the data like a Valid data
    const validatorObject = [ValidationObjectBuilder(minWordsMock)];

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {});
    const validationSchema = yup.object().shape(yupSchemaObject);

    const validationResult = await validationSchema.isValid(dataToValidate); // If the data is valid, this must return stuff like true

    expect(validationResult).toEqual(true); // This is not our error!
  });
});

// //
describe('Test Text input validation max Words', () => {
  it('Test whether Validation text return max words rule', async () => {
    const dataToValidate = { name: 'The test not passed' }; // Object to represent the unform output to be validate by Yup
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

  it('Test whether validation text not return a error instance', async () => {
    const dataToValidate = { name: 'The' }; // Because this, now, the validation validate the data like a Valid data
    const validatorObject = [ValidationObjectBuilder(maxWordsMock)];

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {});
    const validationSchema = yup.object().shape(yupSchemaObject);

    const validationResult = await validationSchema.isValid(dataToValidate); // If the data is valid, this must return stuff like true

    expect(validationResult).toEqual(true); // This is not our error!
  });
});

// //
describe('Test text input validation only required', () => {
  it('Test whether Validation text return required rule', async () => {
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

  it('Test whether validation text not return a error instance', async () => {
    const dataToValidate = { name: 'The test' }; // Because this, now, the validation validate the data like a Valid data
    const validatorObject = [ValidationObjectBuilder(onlyRequiredMock)];

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {});
    const validationSchema = yup.object().shape(yupSchemaObject);

    const validationResult = await validationSchema.isValid(dataToValidate); // If the data is valid, this must return stuff like true

    expect(validationResult).toEqual(true); // This is not our error!
  });
});
