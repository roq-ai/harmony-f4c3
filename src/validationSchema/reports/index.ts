import * as yup from 'yup';

export const reportValidationSchema = yup.object().shape({
  report_data: yup.string().required(),
  patient_id: yup.string().nullable(),
});
