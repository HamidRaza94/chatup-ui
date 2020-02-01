import * as yup from 'yup';

export default yup.object().shape({
  email: yup.string()
    .email()
    .required()
    .label('Email ID'),

  password: yup.string()
    .min(8)
    .max(16)
    .required()
    .label('Password'),
});
