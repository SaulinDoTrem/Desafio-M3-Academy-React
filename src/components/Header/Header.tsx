import styles from "../../styles/main.module.scss";
import { useContext } from "react";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import { PageContext } from "../../contexts/PageContext";

const Header = () => {
    const { isOpened, setIsOpened } = useContext(PageContext);

    return (
        <header className={styles["header-page"]}>
            <HeaderTop isOpened={isOpened} setIsOpened={setIsOpened} />
            <HeaderBottom isOpened={isOpened} setIsOpened={setIsOpened} />
        </header>
    );
};

export default Header;
