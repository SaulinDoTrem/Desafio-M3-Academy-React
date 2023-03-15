import styles from "../../styles/main.module.scss";
import { useState } from "react";

interface FooterListProps {
    title: String;
    texts: Array<String>;
    link?: string;
    childStrong?: boolean;
}

const FooterList = ({ title, texts, childStrong, link }: FooterListProps) => {
    const footerList = "footer-list";
    let className = "";

    const [isToggled, setIsToggled] = useState(false);

    if (!link) link = "#";

    if (childStrong) className = styles["strong"];

    const handleOnClick = () => {
        if (setIsToggled) setIsToggled(!isToggled);
    };

    return (
        <div className={styles[footerList]}>
            <div className={styles[footerList + "__title-area"]}>
                <h2 className={styles[footerList + "__title"]}>{title}</h2>
                <button
                    onClick={handleOnClick}
                    className={`${styles[footerList + "__toggle-button"]} ${
                        styles[`${isToggled && "active"}`]
                    }`}
                ></button>
            </div>

            <ul
                className={`${styles[footerList + "__list"]} ${styles[`${isToggled && "active"}`]}`}
            >
                {texts.map((text, index) => {
                    if (index === texts.length - 1)
                        return (
                            <li
                                key={index}
                                className={`${styles[footerList + "__item"]} ${className}`}
                            >
                                <a href={link}>{text}</a>
                            </li>
                        );

                    return (
                        <li key={index} className={`${styles[footerList + "__item"]} ${className}`}>
                            {text}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default FooterList;
