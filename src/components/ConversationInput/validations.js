import * as yup from 'yup';

const messageSchema = yup.object().shape({
  message: yup
    .string()
    .required()
    .label('Message'),
});

export default messageSchema;
