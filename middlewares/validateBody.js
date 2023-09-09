const { ApiError } = require("../service");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
      throw new ApiError(400, "missing required field");
    }

    const { error } = schema.validate(req.body);

    if (error) {
      throw new ApiError(400, "missing required field");
    }

    next();
  };

  return func;
};

module.exports = validateBody;
