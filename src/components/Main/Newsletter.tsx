import styles from "../../styles/main.module.scss";
import SearchBar from "../SearchBar";

const initialValue = {
    search: "",
    email: "",
};

const Newsletter = () => {
    return (
        <section className={styles["newsletter"]}>
            <div className={styles["newsletter__wrapper"]}>
                <h2 className={styles["newsletter__title"]}>ASSINE NOSSA NEWSLETTER</h2>
                <SearchBar
                    placeholder="E-mail"
                    parentClassName="newsletter-form"
                    initialValues={initialValue}
                    type="email"
                    buttonText="ENVIAR"
                />
            </div>
        </section>
    );
};

export default Newsletter;
