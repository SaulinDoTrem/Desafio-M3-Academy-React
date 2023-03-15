import * as Yup from "yup";
import "yup-phone";
import { parse } from "date-fns";
import CPF from "cpf";

const required = "*Campo Obrigatório";
const date = "*Data Inválida";

export default Yup.object().shape({
    name: Yup.string().min(3, "*Nome Inválido").required(required),
    email: Yup.string().email("*Email Inválido").required(required),
    cpf: Yup.string()
        .required(required)
        .test("test-cpf", "*CPF Inválido", (cpf) => CPF.isValid(cpf!)),
    birth: Yup.date()
        .transform((value, originalValue, context) => {
            if (context.isType(value)) return value;
            return parse(originalValue, "dd.MM.yyyy", new Date());
        })
        .typeError(date)
        .max(new Date(), date)
        .required(required),
    phone: Yup.string().required(required).phone("BR", true, "*Telefone Inválido"),
    insta: Yup.string().min(3, "*Instagram Inválido"),
    read: Yup.bool().oneOf([true], "*"),
});
