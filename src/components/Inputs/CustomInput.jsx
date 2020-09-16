import React, { useState } from 'react';
import { _styledInput } from './StyledInput';

const CustomInput = ({ label, validate }) => {
  const [validated, setValidated] = useState(true);
  const [touched, setTouched] = useState(false);

  const innerValidator = (e) => {
    if (validate(e)) {
      setValidated(false);
    } else {
      setValidated(true);
    }
  };
  return (
    <_styledInput
      placeholder={label}
      id={label}
      validated={touched && validated}
      onChange={(e) => {
        innerValidator(e.target.value);
      }}
      onBlur={() => {
        setTouched(true);
      }}
    />
  );
};

export default CustomInput;
