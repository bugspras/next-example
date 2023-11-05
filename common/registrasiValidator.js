import Joi from "joi";

const registrasiValidation = (data) => {
  const registrasiSchme = Joi.object({
    email: Joi.string().required(),
    username: Joi.string().required(),
    photo: Joi.string().required(),
    fullname: Joi.string().required(),
    password: Joi.string().required(),
  });
  return registrasiSchme.validate(data);
};

export default registrasiValidation;
