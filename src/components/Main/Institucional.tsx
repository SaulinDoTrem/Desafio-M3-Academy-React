import styles from "../../styles/main.module.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "../Routes/About";
import ContactForm from "../Routes/ContactForm";
import houseIcon from "../../assets/icons/home-icon.svg";
import arrowRight from "../../assets/icons/arrow-right-home-icon.svg";
import Menu from "./Menu";

const Institucional = () => {
    return (
        <section className={styles["home"]}>
            <div className={styles["home__nav"]}>
                <span className={styles["home__house-icon"]}>
                    <img src={houseIcon} alt="Home Icon" />
                </span>
                <span className={styles["home__arrow-right-icon"]}>
                    <img src={arrowRight} alt="Arrow Right Icon" />
                </span>
                <p className={styles["home__path-name"]}>INSTITUCIONAL</p>
            </div>

            <div className={styles["institucional"]}>
                <h1 className={styles["institucional__title"]}>INSTITUCIONAL</h1>
                <div className={styles["institucional__wrapper"]}>
                    <BrowserRouter>
                        <Menu />
                        <Routes>
                            <Route path="/" element={<About title="Sobre" />} />
                            <Route
                                path="/forma-pagamento"
                                element={<About title="Forma de Pagamento" />}
                            />
                            <Route path="/entrega" element={<About title="Entrega" />} />
                            <Route
                                path="/troca-devolucao"
                                element={<About title="Troca e Devolução" />}
                            />
                            <Route
                                path="/seguranca-privacidade"
                                element={<About title="Segurança e Privacidade" />}
                            />
                            <Route path="/contato" element={<ContactForm />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </section>
    );
};

export default Institucional;
