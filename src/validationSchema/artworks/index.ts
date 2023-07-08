import * as yup from 'yup';

export const artworkValidationSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().integer().required(),
  gallery_id: yup.string().nullable(),
});
