import { Formik, Form, FormikHelpers } from "formik";
import FormField from "../FormField";
import MaskedFormField from "../MaskedFormField";
import styles from "../../styles/main.module.scss";
import ContactFormSchema from "../../schema/ContactFormSchema";
import { useState } from "react";
import CheckboxField from "../CheckboxField";

interface ContactFormProps {
    name: string;
    email: string;
    cpf: string;
    birth: string;
    phone: string;
    insta: string;
    read: boolean;
}

const phoneMask = [
    "(",
    /[0-9]/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
];

const cpfMask = [
    /[0-9]/,
    /\d/,
    /\d/,
    ".",
    /\d/,
    /\d/,
    /\d/,
    ".",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
];

const birthMask = [/[0-9]/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/];

const ContactForm = () => {
    const [isSubmit, setIsSubmit] = useState(false);

    const handleFormSubmit = (
        values: ContactFormProps,
        actions: FormikHelpers<ContactFormProps>
    ) => {
        console.log("submit");
        console.log(values);
        actions.resetForm();
        setIsSubmit(true);
    };

    const initialValues = {
        name: "",
        email: "",
        cpf: "",
        birth: "",
        phone: "",
        insta: "",
        read: false,
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleFormSubmit}
            validationSchema={ContactFormSchema}
        >
            <Form className={styles.form}>
                <h2 className={styles["form__title"]}>Preencha o Formulário</h2>

                <FormField
                    name="name"
                    placeholder="Seu nome completo"
                    id="contact-name"
                    error
                    labelText="Nome"
                />

                <FormField
                    name="email"
                    placeholder="Seu e-mail"
                    id="contact-email"
                    error
                    labelText="E-mail"
                />

                <MaskedFormField
                    mask={cpfMask}
                    name="cpf"
                    placeholder="000.000.000-00"
                    id="contact-cpf"
                    error
                    labelText="CPF"
                />

                <MaskedFormField
                    mask={birthMask}
                    name="birth"
                    placeholder="00.00.0000"
                    id="contact-birth"
                    error
                    labelText="Data de Nascimento:"
                />

                <MaskedFormField
                    mask={phoneMask}
                    name="phone"
                    placeholder="(00) 00000-0000"
                    id="contact-telefone"
                    error
                    labelText="Telefone:"
                />

                <FormField
                    name="insta"
                    placeholder="@seuuser"
                    id="contact-insta"
                    labelText="Instagram"
                />

                <CheckboxField
                    name="read"
                    id="contact-read"
                    labelText="Declaro que li e aceito"
                    error
                />

                <button className={styles["form__submit"]} type="submit">
                    CADASTRE-SE
                </button>

                <span
                    className={`${styles["form__is-submit"]} ${styles[`${"submit" && isSubmit}`]}`}
                >
                    *Formulário enviado com sucesso!
                </span>
            </Form>
        </Formik>
    );
};

export default ContactForm;
