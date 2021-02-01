import {
  textObjectValidation,
  numberObjectValidation,
  emailObjectValidation,
  dateObjectValidation,
  multipleObjectValidation,
  optionObjectValidation,
  phoneObjectValidation,
  dateOnlyRequiredObjectValidation,
  textOnlyRequiredObjectValidation,
  numberOnlyRequiredObjectValidation,
  emailOnlyRequiredObjectValidation,
  phoneOnlyRequiredObjectValidation,
  booleanOnlyRequiredObjectValidation,
} from '~/utils/ValidationsObjects';

export function ValidationObjectBuilder(field) {
  let specificObjectValidation;
  if (
    field.constraints ||
    field.type === 'MULTIPLE_CHOICES_OPTION' ||
    field.type === 'OPTION'
  ) {
    switch (field.type) {
      case 'TEXT':
        specificObjectValidation = textObjectValidation(
          field.constraints,
          field.name,
          field.required
        );

        break;

      case 'LONG_TEXT':
        specificObjectValidation = textObjectValidation(
          field.constraints,
          field.name,
          field.required
        );

        break;

      case 'NUMBER':
        specificObjectValidation = numberObjectValidation(
          field.constraints,
          field.name,
          field.required
        );

        break;

      case 'EMAIL':
        specificObjectValidation = emailObjectValidation(
          field.constraints,
          field.name,
          field.required
        );

        break;

      case 'DATE':
        specificObjectValidation = dateObjectValidation(
          field.constraints,
          field.name,
          field.required
        );

        break;

      case 'MULTIPLE_CHOICES_OPTION':
        specificObjectValidation = multipleObjectValidation(
          field.name,
          field.required
        );

        break;

      case 'OPTION':
        specificObjectValidation = optionObjectValidation(
          field.name,
          field.required
        );

        break;

      case 'PHONE':
        specificObjectValidation = phoneObjectValidation(
          field.constraints,
          field.name,
          field.required
        );

        break;

      default:
        break;
    }
  }
  if (field.constraints === undefined && field.required === true) {
    switch (field.type) {
      case 'TEXT':
        specificObjectValidation = textOnlyRequiredObjectValidation(
          field.name,
          field.required
        );

        break;

      case 'LONG_TEXT':
        specificObjectValidation = textOnlyRequiredObjectValidation(
          field.name,
          field.required
        );

        break;

      case 'NUMBER':
        specificObjectValidation = numberOnlyRequiredObjectValidation(
          field.name,
          field.required
        );

        break;

      case 'EMAIL':
        specificObjectValidation = emailOnlyRequiredObjectValidation(
          field.name,
          field.required
        );

        break;

      case 'DATE':
        specificObjectValidation = dateOnlyRequiredObjectValidation(
          field.name,
          field.required
        );

        break;

      case 'PHONE':
        specificObjectValidation = phoneOnlyRequiredObjectValidation(
          field.name,
          field.required
        );

        break;

      case 'BOOLEAN':
        specificObjectValidation = booleanOnlyRequiredObjectValidation(
          field.name,
          field.required
        );

        break;

      default:
        break;
    }
  }
  return specificObjectValidation;
}
