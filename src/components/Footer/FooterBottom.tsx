import styles from "../../styles/main.module.scss";
import mastercard from "../../assets/imgs/mastercard.png";
import visa from "../../assets/imgs/visa.png";
import americanExpress from "../../assets/imgs/american-express.png";
import elo from "../../assets/imgs/elo.png";
import hipercard from "../../assets/imgs/hipercard.png";
import paypal from "../../assets/imgs/paypal.png";
import boleto from "../../assets/imgs/boleto.png";
import vtexLogo from "../../assets/imgs/vtex-logo.png";
import vtexPci from "../../assets/imgs/vtex-pci.png";
import m3Logo from "../../assets/imgs/m3-logo.png";

const FooterBottom = () => {
    return (
        <section className={styles["footer-bottom"]}>
            <p className={styles["footer-bottom__text"]}>
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor
            </p>

            <ul className={styles["list-cards"]}>
                <li className={styles["list-cards__item-card"]}>
                    <img src={mastercard} alt="Bandeira Mastercard" />
                </li>

                <li className={styles["list-cards__item-card"]}>
                    <img src={visa} alt="Bandeira Visa" />
                </li>

                <li className={styles["list-cards__item-card"]}>
                    <img src={americanExpress} alt="Bandeira American Express" />
                </li>

                <li className={styles["list-cards__item-card"]}>
                    <img src={elo} alt="Bandeira Elo" />
                </li>

                <li className={styles["list-cards__item-card"]}>
                    <img src={hipercard} alt="Bandeira Hipercard" />
                </li>

                <li className={styles["list-cards__item-card"]}>
                    <img src={paypal} alt="Bandeira PayPal" />
                </li>

                <li className={styles["list-cards__item-card"]}>
                    <img src={boleto} alt="Boleto" />
                </li>

                <li className={styles["list-cards__item"]}>
                    <div className={styles["list-cards__divider"]}></div>
                </li>

                <li className={styles["list-cards__item"]}>
                    <img src={vtexPci} alt="Certificado VTEX PCI" />
                </li>
            </ul>

            <ul className={styles["list-credits"]}>
                <li className={styles["list-credits__item"]}>
                    <figure className={styles["list-credits__figure"]}>
                        <img
                            className={styles["list-credits__image"]}
                            src={vtexLogo}
                            alt="VTEX Logo"
                        />
                        <figcaption className={styles["list-credits__text"]}>Powered By</figcaption>
                    </figure>
                </li>

                <li className={styles["list-credits__item"]}>
                    <figure className={styles["list-credits__figure"]}>
                        <img className={styles["list-credits__image"]} src={m3Logo} alt="M3 Logo" />
                        <figcaption className={styles["list-credits__text"]}>
                            Developed By
                        </figcaption>
                    </figure>
                </li>
            </ul>
        </section>
    );
};

export default FooterBottom;
