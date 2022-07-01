import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("El nombre es necesario"),
  phone: yup.string().required("El número de teléfono es necesario"),
  email: yup
    .string()
    .email("Ingrese un email válido")
    .required("El email es necesario"),
  message: yup.string().required("No se escribió ningún mensaje"),
});

export default schema;
