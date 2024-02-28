const { translate } = require("@vitalets/google-translate-api");
const {
  httpsCodes,
  validateString,
  success,
  error,
} = require("../utils/customFunctions");
const translator = {};

translator.engIntoFr = async (req, res) => {
  try {
    const { text } = req.body;

    const validate = validateString({ stringText: text });
    if (!validate.status) {
      return res.status(httpsCodes.BAD_REQUEST).json({
        status: validate.status,
        message: validate.message,
      });
    }

    const translatedText = await translator.translate({
      textBody: text,
      languageType: "fr",
    });

    success.data = translatedText.data.translation;
    return res.status(httpsCodes.OK).json(success);
  } catch (e) {
    error.error = e.message;
    return res.status(httpsCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

translator.translate = async ({ textBody, languageType }) => {
  let result = {};
  try {
    let { text } = await translate(textBody, { to: languageType });
    result.data = { translation: text };
    result.status = true;
    result.message = "Successfully translated the text";
    return result;
  } catch (error) {
    console.log(error);
    result.status = false;
    result.message = "Something went wrong";
    return result;
  }
};

module.exports = translator;
