import { Field, ErrorMessage } from "formik";
import styles from "../styles/main.module.scss";

interface CheckboxFieldProps {
    id: string;
    name: string;
    placeholder?: string;
    error?: boolean;
    labelText: string;
}

const CheckboxField = ({ id, name, labelText, placeholder, error }: CheckboxFieldProps) => {
    return (
        <div className={styles["form__field-area"]}>
            <div className={styles["form__field-area-wrapper"]}>
                {error ? (
                    <ErrorMessage
                        className={styles["form__checkbox-error"]}
                        name={name}
                        component="span"
                    />
                ) : null}
                <label className={styles["form__checkbox-label"]} htmlFor={id}>
                    {labelText}
                </label>
                <Field
                    className={styles["form__checkbox"]}
                    name={name}
                    type="checkbox"
                    id={id}
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};

export default CheckboxField;
export type { CheckboxFieldProps };
