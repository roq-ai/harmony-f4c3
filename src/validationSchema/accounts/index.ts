import * as yup from 'yup';

export const accountValidationSchema = yup.object().shape({
  balance: yup.number().integer().required(),
  accountant_id: yup.string().nullable(),
});
