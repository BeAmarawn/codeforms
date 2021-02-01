import {
  textObjectValidation,
  numberObjectValidation,
  emailObjectValidation,
  dateObjectValidation,
  multipleObjectValidation,
  optionObjectValidation,
  dateOnlyRequiredObjectValidation,
  phoneObjectValidation,
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
  if (
    field.constraints === undefined &&
    field.type === 'DATE' &&
    field.required === true
  ) {
    specificObjectValidation = dateOnlyRequiredObjectValidation(
      field.name,
      field.required
    );
  }
  return specificObjectValidation;
}
