import { object, string } from 'yup';

const messageSchema = object().shape({
  message: string().trim().required('validation.required'),
});

const getChannelNameSchema = (channels) => object().shape({
  name: string()
    .trim()
    .required('validation.required')
    .min(3, 'validation.min')
    .max(20, 'validation.max')
    .notOneOf(channels, 'validation.uniq'),
});

export {
  messageSchema,
  getChannelNameSchema,
};
