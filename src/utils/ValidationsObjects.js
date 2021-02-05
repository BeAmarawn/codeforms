import { toDate, toBrazillianDate } from '~/utils/formatDateFunctions';

// Short/Long Text Validations Validations
export const textObjectValidation = (objectConstraints, name, required) => {
  const ConstraintsTextTypes = (constraint, valueConstraint) => {
    let specificConstraint;
    switch (constraint) {
      case 'size':
        specificConstraint = {
          type: 'length',
          params: [
            valueConstraint,
            `O Campo deve possuir ${valueConstraint} caracteres`,
          ],
        };

        break;

      case 'minSize':
        specificConstraint = {
          type: 'min',
          params: [
            valueConstraint,
            `O Campo deve possuir no mínimo ${valueConstraint} caracteres`,
          ],
        };

        break;
      case 'maxSize':
        specificConstraint = {
          type: 'max',
          params: [
            valueConstraint,
            `O Campo deve possuir no máximo ${valueConstraint} caracteres`,
          ],
        };

        break;
      case 'minWords':
        specificConstraint = {
          type: 'matches',
          params: [
            `^(\\b\\w+\\b\\s?){${valueConstraint},}$`,
            `O Campo deve possuir no mínimo ${valueConstraint} palavras`,
          ],
        };

        break;
      case 'maxWords':
        specificConstraint = {
          type: 'matches',
          params: [
            `^(?:\\b\\w+\\b[\\s\\r\\n]*){1,${valueConstraint}}$`,
            `O Campo deve possuir no máximo ${valueConstraint} palavras`,
          ],
        };

        break;

      default:
        break;
    }

    if (specificConstraint !== undefined) {
      return specificConstraint;
    }
  };

  const validationsArray = Object.keys(objectConstraints).map((item) =>
    ConstraintsTextTypes(item, objectConstraints[item])
  );

  const validatorObject = {
    id: name,
    validationType: 'string',
    validations: validationsArray,
  };

  if (required) {
    const specificConstraint = {
      type: 'required',
      params: [`Esse Campo é obrigatório`],
    };
    validatorObject.validations.push(specificConstraint);
  }

  return validatorObject;
};

// Number Validations
export const numberObjectValidation = (objectConstraints, name, required) => {
  if (objectConstraints.regex === undefined) {
    const ConstraintsNumberTypes = (constraint, valueConstraint) => {
      let specificConstraint;
      switch (constraint) {
        case 'minValue':
          specificConstraint = {
            type: 'min',
            params: [
              valueConstraint,
              `O Valor do campo deve ser no mínimo ${valueConstraint}`,
            ],
          };

          break;

        case 'maxValue':
          specificConstraint = {
            type: 'max',
            params: [
              valueConstraint,
              `O Valor do campo deve ser no máximo ${valueConstraint}`,
            ],
          };

          break;

        default:
          break;
      }

      if (specificConstraint !== undefined) {
        return specificConstraint;
      }
    };

    const validationsArray = Object.keys(objectConstraints).map((item) =>
      ConstraintsNumberTypes(item, objectConstraints[item])
    );

    const validatorObject = {
      id: name,
      validationType: 'number',
      validations: validationsArray.filter((item) => item !== undefined),
    };

    if (required) {
      const specificConstraint = {
        type: 'required',
        params: [`Esse Campo é obrigatório`],
      };
      validatorObject.validations.push(specificConstraint);
    }
    if (objectConstraints.acceptDecimal === false) {
      const specificConstraint = {
        type: 'integer',
        params: [`Esse Campo deve conter um valor inteiro`],
      };
      validatorObject.validations.push(specificConstraint);
    }

    return validatorObject;
  }
  if (objectConstraints.regex !== undefined) {
    const ConstraintsNumberWithRegexTypes = (constraint, valueConstraint) => {
      let specificConstraint;
      switch (constraint) {
        case 'regex':
          specificConstraint = {
            type: 'matches',
            params: [
              `${valueConstraint}`,
              `O valor inserido no campo não fornece o formato específico necessário`,
            ],
          };

          break;

        default:
          break;
      }

      if (specificConstraint !== undefined) {
        return specificConstraint;
      }
    };

    const validationsArray = Object.keys(objectConstraints).map((item) =>
      ConstraintsNumberWithRegexTypes(item, objectConstraints[item])
    );

    const validatorObject = {
      id: name,
      validationType: 'string',
      validations: validationsArray.filter((item) => item !== undefined),
    };

    if (required) {
      const specificConstraint = {
        type: 'required',
        params: [`Esse Campo é obrigatório`],
      };
      validatorObject.validations.push(specificConstraint);
    }

    return validatorObject;
  }
};

// Email Validations
export const emailObjectValidation = (objectConstraints, name, required) => {
  const ConstraintsEmailTypes = (constraint, valueConstraint) => {
    let specificConstraint;
    switch (constraint) {
      case 'domains':
        specificConstraint = {
          type: 'matches',
          params: [
            `(@${valueConstraint.join('$|@')}$)`,
            `O email deve respeitar algum dos domínios a seguir, (${valueConstraint.join(
              ', '
            )})`,
          ],
        };

        break;

      default:
        break;
    }

    if (specificConstraint !== undefined) {
      return specificConstraint;
    }
  };

  const validationsArray = Object.keys(objectConstraints).map((item) =>
    ConstraintsEmailTypes(item, objectConstraints[item])
  );

  const validatorObject = {
    id: name,
    validationType: 'string',
    validations: validationsArray,
  };

  if (required) {
    const specificConstraint = {
      type: 'required',
      params: [`Esse Campo é obrigatório`],
    };
    validatorObject.validations.push(specificConstraint);
  }

  return validatorObject;
};

// Date Validations
export const dateObjectValidation = (objectConstraints, name, required) => {
  const ConstraintsDateTypes = (constraint, valueConstraint) => {
    let specificConstraint;
    switch (constraint) {
      case 'minDate':
        specificConstraint = {
          type: 'min',
          params: [
            toDate(valueConstraint),
            `A data mínima permitida é, ${toBrazillianDate(valueConstraint)}`,
          ],
        };

        break;

      case 'maxDate':
        specificConstraint = {
          type: 'max',
          params: [
            toDate(valueConstraint),
            `A data máxima permitida é, ${toBrazillianDate(valueConstraint)}`,
          ],
        };

        break;

      default:
        break;
    }

    if (specificConstraint !== undefined) {
      return specificConstraint;
    }
  };

  const validationsArray = Object.keys(objectConstraints).map((item) =>
    ConstraintsDateTypes(item, objectConstraints[item])
  );

  const validatorObject = {
    id: name,
    validationType: 'date',
    validations: validationsArray,
  };

  if (required) {
    const specificConstraint = {
      type: 'required',
      params: [`Esse Campo é obrigatório`],
    };
    const specificConstraintTwo = {
      type: 'nullable',
      params: [],
    };
    validatorObject.validations.push(specificConstraint);
    validatorObject.validations.push(specificConstraintTwo);
  }

  return validatorObject;
};

// Multiple Options Validations
export const multipleObjectValidation = (name, required) => {
  const validationsArray = [];

  const validatorObject = {
    id: name,
    validationType: 'array',
    validations: validationsArray,
  };

  if (required) {
    const specificConstraint = {
      type: 'required',
      params: [`Esse Campo é obrigatório`],
    };
    const specificConstraintTwo = {
      type: 'min',
      params: [1, `Esse Campo é obrigatório`],
    };
    validatorObject.validations.push(specificConstraint);
    validatorObject.validations.push(specificConstraintTwo);
  }

  return validatorObject;
};

// Choose Option Validations
export const optionObjectValidation = (name, required) => {
  const validationsArray = [];

  const validatorObject = {
    id: name,
    validationType: 'number',
    validations: validationsArray,
  };

  if (required) {
    const specificConstraint = {
      type: 'required',
      params: [`Esse Campo é obrigatório`],
    };
    const specificConstraintTwo = {
      type: 'nullable',
      params: [1, `Esse Campo é obrigatório`],
    };
    validatorObject.validations.push(specificConstraint);
    validatorObject.validations.push(specificConstraintTwo);
  }

  return validatorObject;
};

// Phone Validations
export const phoneObjectValidation = (objectConstraints, name, required) => {
  const ConstraintsNumberTypes = (constraint, valueConstraint) => {
    let specificConstraint;
    switch (constraint) {
      case 'size':
        specificConstraint = {
          type: 'length',
          params: [
            valueConstraint,
            `O número deve ter ${valueConstraint} dígitos`,
          ],
        };

        break;

      default:
        break;
    }

    if (specificConstraint !== undefined) {
      return specificConstraint;
    }
  };

  const validationsArray = Object.keys(objectConstraints).map((item) =>
    ConstraintsNumberTypes(item, objectConstraints[item])
  );

  const validatorObject = {
    id: name,
    validationType: 'string',
    validations: validationsArray.filter((item) => item !== undefined),
  };

  if (required) {
    const specificConstraint = {
      type: 'required',
      params: [`Esse Campo é obrigatório`],
    };
    validatorObject.validations.push(specificConstraint);
  }

  return validatorObject;
};

// Only Required Validations
export const dateOnlyRequiredObjectValidation = (name, required) => {
  const validatorObject = {
    id: name,
    validationType: 'date',
    validations: [],
  };

  if (required) {
    const specificConstraint = {
      type: 'required',
      params: [`Esse Campo é obrigatório`],
    };
    const specificConstraintTwo = {
      type: 'nullable',
      params: [],
    };
    validatorObject.validations.push(specificConstraint);
    validatorObject.validations.push(specificConstraintTwo);
  }

  return validatorObject;
};

export const textOnlyRequiredObjectValidation = (name, required) => {
  const validatorObject = {
    id: name,
    validationType: 'string',
    validations: [],
  };

  if (required) {
    const specificConstraint = {
      type: 'required',
      params: [`Esse Campo é obrigatório`],
    };
    const specificConstraintTwo = {
      type: 'nullable',
      params: [],
    };
    validatorObject.validations.push(specificConstraint);
    validatorObject.validations.push(specificConstraintTwo);
  }

  return validatorObject;
};

export const numberOnlyRequiredObjectValidation = (name, required) => {
  const validatorObject = {
    id: name,
    validationType: 'number',
    validations: [],
  };

  if (required) {
    const specificConstraint = {
      type: 'required',
      params: [`Esse Campo é obrigatório`],
    };
    const specificConstraintTwo = {
      type: 'nullable',
      params: [],
    };
    validatorObject.validations.push(specificConstraint);
    validatorObject.validations.push(specificConstraintTwo);
  }

  return validatorObject;
};

export const emailOnlyRequiredObjectValidation = (name, required) => {
  const validatorObject = {
    id: name,
    validationType: 'string',
    validations: [],
  };

  if (required) {
    const specificConstraint = {
      type: 'required',
      params: [`Esse Campo é obrigatório`],
    };
    const specificConstraintTwo = {
      type: 'nullable',
      params: [],
    };
    validatorObject.validations.push(specificConstraint);
    validatorObject.validations.push(specificConstraintTwo);
  }

  return validatorObject;
};

export const phoneOnlyRequiredObjectValidation = (name, required) => {
  const validatorObject = {
    id: name,
    validationType: 'number',
    validations: [],
  };

  if (required) {
    const specificConstraint = {
      type: 'required',
      params: [`Esse Campo é obrigatório`],
    };
    const specificConstraintTwo = {
      type: 'nullable',
      params: [],
    };
    validatorObject.validations.push(specificConstraint);
    validatorObject.validations.push(specificConstraintTwo);
  }

  return validatorObject;
};
export const booleanOnlyRequiredObjectValidation = (name, required) => {
  const validatorObject = {
    id: name,
    validationType: 'boolean',
    validations: [],
  };

  if (required) {
    const specificConstraint = {
      type: 'required',
      params: [`Esse Campo é obrigatório`],
    };
    const specificConstraintTwo = {
      type: 'nullable',
      params: [],
    };
    validatorObject.validations.push(specificConstraint);
    validatorObject.validations.push(specificConstraintTwo);
  }

  return validatorObject;
};
