import { Field, ErrorMessage } from "formik";
import styles from "../styles/main.module.scss";
import MaskedInput from "react-text-mask";

interface MaskedFormFieldProps {
    id: string;
    name: string;
    placeholder?: string;
    error?: boolean;
    labelText: string;
    mask: Array<any>;
}

const MaskedFormField = ({
    id,
    name,
    labelText,
    placeholder,
    error,
    mask,
}: MaskedFormFieldProps) => {
    return (
        <div className={styles["form__field-area"]}>
            <label className={styles["form__label"]} htmlFor={id}>
                {labelText}
            </label>

            <Field
                name={name}
                render={({ field }: any) => (
                    <MaskedInput
                        {...field}
                        mask={mask}
                        id={id}
                        placeholder={placeholder}
                        className={styles["form__field"]}
                    />
                )}
            />
            {error ? (
                <ErrorMessage className={styles["form__error"]} name={name} component="span" />
            ) : null}
        </div>
    );
};

export default MaskedFormField;
