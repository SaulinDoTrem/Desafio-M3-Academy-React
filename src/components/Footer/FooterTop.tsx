import styles from "../../styles/main.module.scss";
import FooterList from "./FooterList";
import whatsAppICon from "../../assets/icons/whatsapp-icon.svg";
import IconSocialMedia from "./IconSocialMedia";
import facebookIcon from "../../assets/icons/facebook-icon.svg";
import instagramIcon from "../../assets/icons/instagram-icon.svg";
import twitterIcon from "../../assets/icons/twitter-icon.svg";
import youtubeIcon from "../../assets/icons/youtube-icon.svg";
import linkedinIcon from "../../assets/icons/linkedin-icon.svg";
import arrowUp from "../../assets/icons/arrow-up-icon.svg";
import { useState } from "react";

const FooterTop = () => {
    const returnTop = () => {
        window.scrollTo(0, 0);
    };

    const [hasScrolled, setHasScrolled] = useState(false);

    document.addEventListener("scroll", () => {
        if (window.scrollY > 0) setHasScrolled(true);
        else setHasScrolled(false);
    });

    const footerList1 = [
        "Quem Somos",
        "Política de Privacidade",
        "Segurança",
        "Seja um Revendedor",
    ];

    const footerList2 = ["Entrega", "Pagamento", "Trocas e Devoluções", "Dúvidas Frequentes"];

    const footerList3 = [
        "Atendimento Ao Consumidor",
        "(11) 4159 9504",
        "Atendimento Online",
        "(11) 99433-8825",
    ];

    return (
        <section className={styles["footer-top"]}>
            <ul className={styles["footer-top__lists"]}>
                <li className={styles["footer-top__item-list"]}>
                    <FooterList title="INSTITUCIONAL" texts={footerList1} />
                </li>

                <li className={styles["footer-top__item-list"]}>
                    <FooterList title="DÚVIDAS" texts={footerList2} />
                </li>

                <li className={styles["footer-top__item-list"]}>
                    <FooterList title="FALE CONOSCO" texts={footerList3} childStrong />
                </li>
            </ul>

            <div className={styles["social-media"]}>
                <ul className={styles["social-media__list"]}>
                    <li className={styles["social-media__item"]}>
                        <IconSocialMedia src={facebookIcon} alt="Facebook Icon" />
                    </li>

                    <li className={styles["social-media__item"]}>
                        <IconSocialMedia src={instagramIcon} alt="Instagram Icon" />
                    </li>

                    <li className={styles["social-media__item"]}>
                        <IconSocialMedia src={twitterIcon} alt="Twitter Icon" />
                    </li>

                    <li className={styles["social-media__item"]}>
                        <IconSocialMedia src={youtubeIcon} alt="Youtube Icon" />
                    </li>

                    <li className={styles["social-media__item"]}>
                        <IconSocialMedia src={linkedinIcon} alt="Linkedin Icon" />
                    </li>
                </ul>

                <a
                    href="https://www.loremipsum.com"
                    className={styles["social-media__social-link"]}
                >
                    www.loremipsum.com
                </a>
            </div>

            <div className={styles["util-buttons"]}>
                <a
                    href="https://api.whatsapp.com/send?phone=999999999&text=Olá, tudo bem?"
                    className={styles["util-buttons__whatsapp"]}
                >
                    <img src={whatsAppICon} alt="Whatsapp Icon" />
                </a>
                <button
                    onClick={returnTop}
                    className={`${styles["util-buttons__return-top"]} ${
                        styles[`${hasScrolled && "show"}`]
                    }`}
                >
                    <img src={arrowUp} alt="Seta para Cima" />
                </button>
            </div>
        </section>
    );
};

export default FooterTop;
