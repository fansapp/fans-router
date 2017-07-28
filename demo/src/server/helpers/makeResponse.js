export default (status, content) => {
  const success = ![400, 401, 404, 422, 500].includes(status);
  const { data, errors, formError } = content;
  return {
    success,
    data,
    errors,
    formError,
  };
};
