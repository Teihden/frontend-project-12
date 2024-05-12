import { object, string } from 'yup';

const messageSchema = object().shape({
  message: string().trim().required('validation.required'),
});

const getChannelNameSchema = (channels) => object().shape({
  name: string()
    .trim()
    .required('validation.required')
    .min(3, 'validation.min_other')
    .max(20, 'validation.max_other')
    .notOneOf(channels, 'validation.uniq'),
});

const signUpSchema = object().shape({
  username: string()
    .trim()
    .required('validation.required')
    .min(3, 'validation.usernameCharacters')
    .max(20, 'validation.usernameCharacters'),
  password: string()
    .trim()
    .required('validation.required')
    .min(6, 'validation.min_other'),
  confirmPassword: string()
    .test(
      'confirmPassword',
      'validation.passwordMustMatch',
      (value, context) => value === context.parent.password,
    ),
});

export {
  messageSchema,
  getChannelNameSchema,
  signUpSchema,
};
