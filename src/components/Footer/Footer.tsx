import React from "react";
import styles from "../../styles/main.module.scss";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

const Footer = () => {
    return (
        <footer className={styles["footer-page"]}>
            <FooterTop />
            <FooterBottom />
        </footer>
    );
};

export default Footer;
