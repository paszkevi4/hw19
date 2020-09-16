export const nameValidator = (e) => {
  if (e && e.length > 2) {
    return true;
  } else {
    return false;
  }
};

export const emailValidator = (e) => {
  if (e && e.match(/^[0-9a-zA-Z]{3,}[@]{1}[a-z]{2,}[.]{1}[a-z]{2,}$/i)) {
    return true;
  } else {
    return false;
  }
};

export const passwordValidator = (e) => {
  if (e && e.length > 8 && e.match(/(?=.*[A-Z])(?=.*[a-z])/g)) {
    return true;
  } else {
    return false;
  }
};
