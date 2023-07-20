import * as yup from 'yup';

export const inventoryValidationSchema = yup.object().shape({
  item_name: yup.string().required(),
  quantity: yup.number().integer().required(),
  clinic_manager_id: yup.string().nullable(),
});
