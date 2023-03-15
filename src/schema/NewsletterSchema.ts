import * as Yup from "yup";

export default Yup.object().shape({
    email: Yup.string().required("*Campo obrigatório").email("*Email inválido"),
});
