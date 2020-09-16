import React, { useState } from 'react';
import { _styledInput } from './StyledComponents';

const CustomInput = ({ label, validate, value, setValue }) => {
  const [validated, setValidated] = useState(false);
  const [touched, setTouched] = useState(false);

  const innerValidator = (e) => {
    if (validate(e)) {
      setValidated(true);
    } else {
      setValidated(false);
    }
  };

  return (
    <_styledInput
      value={value}
      placeholder={label}
      id={label}
      touched={touched}
      validated={validated}
      onChange={(e) => {
        setValue(e.target.value);
        innerValidator(e.target.value);
      }}
      onBlur={() => {
        setTouched(true);
      }}
    />
  );
};

export default CustomInput;
