function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const emailValidates = regEx.test(email);
  return emailValidates;
}

function testPassword(password) {
  const passwordRegEx =
    /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
  //1 lowercase, 1 uppercase 1 number and atleast 8 characters
  const passwordValidate = passwordRegEx.test(password);
  return passwordValidate;
}

function controlPassword(password, confirm) {
  let confirmPass = false;
  if (password === confirm) {
    return (confirmPass = true);
  } else {
    return (confirmPass = false);
  }
}
