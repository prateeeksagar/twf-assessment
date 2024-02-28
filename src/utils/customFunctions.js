const Joi = require("joi");

const customFunctions = {};

customFunctions.httpsCodes = {
  OK: 200,
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500,
};

customFunctions.success = {
  success: true,
  message: "Successfully completed the request",
  data: {},
  error: {},
};

customFunctions.error = {
  success: true,
  message: "Something went wrong",
  data: {},
  error: {},
};

customFunctions.validateString = ({ stringText }) => {
  const schema = Joi.string()
    .min(1)
    .max(10000)
    .label("Please provide valid string.")
    .required();
  const resp = schema.validate(stringText);
  if (resp.error) {
    return {
      status: false,
      message: resp.error?.details[0]?.context?.label,
    };
  }
  return {
    status: true,
    message: "OK",
  };
};

module.exports = customFunctions;
