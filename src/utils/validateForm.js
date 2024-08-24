const validateForm = (email, password) => {
  const validEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const validPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!validEmail) {
    return "*Enter correct email address";
  }
  if (!validPassword) {
    return "*Enter valid password";
  }
};
export default validateForm;
