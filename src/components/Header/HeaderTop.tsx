import styles from "../../styles/main.module.scss";
import logoM3Academy from "../../assets/imgs/m3-academy-logo.png";
import cartIcon from "../../assets/icons/cart-icon.svg";
import menuIcon from "../../assets/icons/menu-icon.svg";
import { PageContextData } from "../../contexts/PageContext";
import SearchBar from "../SearchBar";

const initialValue = {
    search: "",
    email: "",
};

const HeaderTop = ({ isOpened, setIsOpened }: PageContextData) => {
    const handleOnClick = () => {
        setIsOpened(!isOpened);
    };

    return (
        <section className={styles["header-top"]}>
            <button className={styles["header-top__menu-button"]} onClick={handleOnClick}>
                <img className={styles["header-top__menu-icon"]} src={menuIcon} alt="" />
            </button>

            <a className={styles["header-top__logo-wrapper"]} href="#">
                <img
                    className={styles["header-top__logo-image"]}
                    src={logoM3Academy}
                    alt="M3 Academy Logo"
                />
            </a>

            <SearchBar
                placeholder="Buscar..."
                parentClassName="header-search-form"
                initialValues={initialValue}
                type="search"
            />

            <div className={styles["header-login-area"]}>
                <button
                    className={`${styles["header-login-area__login-button"]} ${
                        styles[`${isOpened && "opened"}`]
                    }`}
                >
                    ENTRAR
                </button>
                <a href="#">
                    <img
                        className={styles["header-login-area__cart"]}
                        src={cartIcon}
                        alt="Cart Icon"
                    />
                </a>
            </div>
        </section>
    );
};

export default HeaderTop;
