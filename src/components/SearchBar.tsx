import styles from "../styles/main.module.scss";
import { Formik, Form, Field, FormikHelpers, ErrorMessage } from "formik";
import SearchBarFormSchema from "../schema/SearchBarFormSchema";
import NewsletterSchema from "../schema/NewsletterSchema";

interface SearchBarProps {
    search: string;
    email: string;
}

interface SearchFormProps {
    placeholder: string;
    type: string;
    parentClassName: string;
    buttonText?: string;
    initialValues: Object & SearchBarProps;
}

const SearchBar = ({
    placeholder,
    parentClassName,
    buttonText,
    initialValues,
    type,
}: SearchFormProps) => {
    if (!buttonText) buttonText = "";

    const schema = type === "search" ? SearchBarFormSchema : NewsletterSchema;

    const handleFormSubmit = (values: SearchBarProps, actions: FormikHelpers<SearchBarProps>) => {
        console.log("submit");
        console.log(values, actions);
        actions.resetForm();
    };

    return (
        <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={schema}>
            <Form className={styles[parentClassName]}>
                <Field
                    className={styles[parentClassName + "__search-box"]}
                    name={type}
                    id={type}
                    placeholder={placeholder}
                />
                <ErrorMessage
                    component="span"
                    className={styles[parentClassName + "__error-message"]}
                    name={type}
                />
                <button className={styles[parentClassName + "__search-button"]} type="submit">
                    {buttonText}
                </button>
            </Form>
        </Formik>
    );
};

export default SearchBar;
