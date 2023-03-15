import styles from "../../styles/main.module.scss";
import closeIcon from "../../assets/icons/close-icon.svg";
import { PageContextData } from "../../contexts/PageContext";

const HeaderBottom = ({ isOpened, setIsOpened }: PageContextData) => {
    const handleOnClick = () => {
        setIsOpened(!isOpened);
    };

    return (
        <section className={`${styles["header-bottom"]} ${styles[`${isOpened && "opened"}`]}`}>
            <div className={styles["header-bottom__content"]}>
                <div className={styles["header-bottom__menu"]}>
                    <button
                        onClick={handleOnClick}
                        className={styles["header-bottom__menu-button"]}
                    >
                        <img src={closeIcon} alt="Close Icon" />
                    </button>
                </div>
                <ul className={styles["header-bottom__item-list"]}>
                    <li className={styles["header-bottom__item"]}>CURSOS</li>
                    <li className={styles["header-bottom__item"]}>SAIBA MAIS</li>
                    <li className={styles["header-bottom__item"]}>INSTITUIÇÃO</li>
                </ul>
            </div>

            <div className={styles["header-bottom__overlay"]} onClick={handleOnClick}></div>
        </section>
    );
};

export default HeaderBottom;
