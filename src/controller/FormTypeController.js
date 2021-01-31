import React from 'react';
import InputText from '~/components/InputText';
import InputLongText from '~/components/InputLongText';
import InputNumeric from '~/components/InputNumeric';
import InputEmail from '~/components/InputEmail';
import InputDate from '~/components/InputDate';
import InputPhone from '~/components/InputPhone';
import InputBoolean from '~/components/InputBoolean';
import InputOption from '~/components/InputOption';
import InputMultiple from '~/components/InputMultiple';

export function specificInputReturner(field, name) {
  const InputTypes = {
    TEXT: <InputText key={field.name} name={name} field={field} />,
    LONG_TEXT: <InputLongText key={field.name} name={name} field={field} />,
    NUMBER: <InputNumeric key={field.name} name={name} field={field} />,
    EMAIL: <InputEmail key={field.name} name={name} field={field} />,
    DATE: <InputDate key={field.name} name={name} field={field} />,
    PHONE: <InputPhone key={field.name} name={name} field={field} />,
    BOOLEAN: <InputBoolean key={field.name} name={name} field={field} />,
    OPTION: <InputOption key={field.name} name={name} field={field} />,
    MULTIPLE_CHOICES_OPTION: (
      <InputMultiple key={field.name} name={name} field={field} />
    ),
  };

  let inputComponent;
  switch (field.type) {
    case 'TEXT':
      inputComponent = InputTypes.TEXT;

      break;

    case 'LONG_TEXT':
      inputComponent = InputTypes.LONG_TEXT;

      break;
    case 'NUMBER':
      inputComponent = InputTypes.NUMBER;

      break;
    case 'EMAIL':
      inputComponent = InputTypes.EMAIL;

      break;
    case 'DATE':
      inputComponent = InputTypes.DATE;

      break;
    case 'PHONE':
      inputComponent = InputTypes.PHONE;

      break;
    case 'BOOLEAN':
      inputComponent = InputTypes.BOOLEAN;

      break;
    case 'OPTION':
      inputComponent = InputTypes.OPTION;

      break;
    case 'MULTIPLE_CHOICES_OPTION':
      inputComponent = InputTypes.MULTIPLE_CHOICES_OPTION;

      break;

    default:
      break;
  }
  return inputComponent;
}
