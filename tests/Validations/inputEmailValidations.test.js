import * as yup from 'yup';
import domainsMock from '../fixtures/Validations/EmailField/emailField_domains.json';
import requiredMock from '../fixtures/Validations/EmailField/emailField_required.json';

import { ValidationObjectBuilder } from '~/controller/ValidationObjectBuilder';
import { createYupSchema } from '~/utils/yupSchemaCreator';

describe('Test email input validation', () => {
  it('Test whether Validation email return domains rule', async () => {
    const dataToValidate = { email: 'bernardoamaralmarinho@gmail.br' }; // Object to represent the unform output to be validate by Yup
    const validatorObject = [ValidationObjectBuilder(domainsMock)]; // Sending the field object mock received from the api, to the function that builds a validation object compatible with YupSchema builder

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {}); // Building a valid Schema Object
    const validationSchema = yup.object().shape(yupSchemaObject); // Creating a yup schema instance

    try {
      await validationSchema.validate(dataToValidate); // This must returns a yup error instance
    } catch (error) {
      expect(error).toBeInstanceOf(yup.ValidationError); // Verification of error origin
      expect(error.errors[0]).toBe(
        'O email deve respeitar algum dos domínios a seguir, (gmail.com, hotmail.com, outlook.com, bol.com.br)'
      ); // This is our error!
    }
  });

  it('Test whether validation email not return a error instance', async () => {
    const dataToValidate = { email: 'bernardoamaralmarinho@gmail.com' }; // Because this, now, the validation validate the data like a Valid data
    const validatorObject = [ValidationObjectBuilder(domainsMock)];

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {});
    const validationSchema = yup.object().shape(yupSchemaObject);

    const validationResult = await validationSchema.isValid(dataToValidate); // If the data is valid, this must return stuff like true

    expect(validationResult).toEqual(true); // This is not our error!
  });
});

describe('Test email input validation', () => {
  it('Test whether Validation email return required rule', async () => {
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

  it('Test whether validation email not return a error instance', async () => {
    const dataToValidate = { email: 'bernardoamaralmarinho@gmail.com' }; // Because this, now, the validation validate the data like a Valid data
    const validatorObject = [ValidationObjectBuilder(requiredMock)];

    const yupSchemaObject = validatorObject.reduce(createYupSchema, {});
    const validationSchema = yup.object().shape(yupSchemaObject);

    const validationResult = await validationSchema.isValid(dataToValidate); // If the data is valid, this must return stuff like true

    expect(validationResult).toEqual(true); // This is not our error!
  });
});
