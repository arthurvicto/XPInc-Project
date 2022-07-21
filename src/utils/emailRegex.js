const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

module.exports = { validateEmail };

// Referência :https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
