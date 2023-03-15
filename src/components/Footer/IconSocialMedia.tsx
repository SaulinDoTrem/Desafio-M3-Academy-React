import styles from "../../styles/main.module.scss";

interface IconSocialMediaProps {
    src: string;
    href?: string;
    alt: string;
}

const IconSocialMedia = ({ src, href, alt }: IconSocialMediaProps) => {
    if (!href) href = "#";

    return (
        <a href={href} className={styles["social-media__link"]}>
            <img className={styles["social-media__icon"]} src={src} alt={alt} />
        </a>
    );
};

export default IconSocialMedia;
