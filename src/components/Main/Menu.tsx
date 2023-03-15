import styles from "../../styles/main.module.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Menu = () => {
    const [routePosition, setRoutePosition] = useState(0);

    useEffect(() => {
        const location = window.location.pathname;

        switch (location) {
            case "/":
                setRoutePosition(0);
                break;
            case "/forma-pagamento":
                setRoutePosition(1);
                break;
            case "/entrega":
                setRoutePosition(2);
                break;
            case "/troca-devolucao":
                setRoutePosition(3);
                break;
            case "/seguranca-privacidade":
                setRoutePosition(4);
                break;
            case "/contato":
                setRoutePosition(5);
                break;
        }
    });

    return (
        <>
            <ul className={styles["routes"]}>
                <li
                    className={`${styles["routes__item"]} ${
                        styles[`${routePosition === 0 && "active"}`]
                    }`}
                >
                    <Link onClick={() => setRoutePosition(0)} to="/">
                        Sobre
                    </Link>
                </li>
                <li
                    className={`${styles["routes__item"]} ${
                        styles[`${routePosition === 1 && "active"}`]
                    }`}
                >
                    <Link onClick={() => setRoutePosition(1)} to="/forma-pagamento">
                        Forma de Pagamento
                    </Link>
                </li>
                <li
                    className={`${styles["routes__item"]} ${
                        styles[`${routePosition === 2 && "active"}`]
                    }`}
                >
                    <Link onClick={() => setRoutePosition(2)} to="/entrega">
                        Entrega
                    </Link>
                </li>
                <li
                    className={`${styles["routes__item"]} ${
                        styles[`${routePosition === 3 && "active"}`]
                    }`}
                >
                    <Link onClick={() => setRoutePosition(3)} to="/troca-devolucao">
                        Troca e Devolução
                    </Link>
                </li>
                <li
                    className={`${styles["routes__item"]} ${
                        styles[`${routePosition === 4 && "active"}`]
                    }`}
                >
                    <Link onClick={() => setRoutePosition(4)} to="/seguranca-privacidade">
                        Segurança e Privacidade
                    </Link>
                </li>
                <li
                    className={`${styles["routes__item"]} ${
                        styles[`${routePosition === 5 && "active"}`]
                    }`}
                >
                    <Link onClick={() => setRoutePosition(5)} to="/contato">
                        Contato
                    </Link>
                </li>
            </ul>

            <div className={styles["routes__divider"]}></div>
        </>
    );
};

export default Menu;
