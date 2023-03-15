import { Field, ErrorMessage } from "formik";
import styles from "../styles/main.module.scss";

interface FormFieldProps {
    id: string;
    name: string;
    placeholder?: string;
    error?: boolean;
    labelText: string;
}

const FormField = ({ id, name, labelText, placeholder, error }: FormFieldProps) => {
    return (
        <div className={styles["form__field-area"]}>
            <label className={styles["form__label"]} htmlFor={id}>
                {labelText}
            </label>
            <Field
                className={styles["form__field"]}
                name={name}
                id={id}
                placeholder={placeholder}
            />
            {error ? (
                <ErrorMessage className={styles["form__error"]} name={name} component="span" />
            ) : null}
        </div>
    );
};

export default FormField;
export type { FormFieldProps };
