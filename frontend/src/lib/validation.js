import { object, string } from 'yup';

const messageSchema = object().shape({
  message: string().trim().required('validation.required'),
});

const getChannelNameSchema = (channels) => object().shape({
  name: string()
    .trim()
    .required('validation.required')
    .min(5, 'validation.min')
    .max(30, 'validation.max')
    .notOneOf(channels, 'validation.uniq'),
});

export {
  messageSchema,
  getChannelNameSchema,
};
