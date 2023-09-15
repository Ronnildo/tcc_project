import { useState } from "react";
import Header from "../../components/Header";
import Switch from "../../components/SwitchButton";
import styles from "./Home.module.css";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const HomePage = () => {
    const [value, setValue] = useState(false);
    return (
        <>
            <Header styles={styles} />
            <div className={styles.dataContainer}>
                <div className={styles.headerTable}>
                    <div className={styles.headerContains}>
                        <h3 id={styles.address}>IP ADDRESS</h3>
                        <h3>USER</h3>
                        <h3>PORT</h3>
                        <h3>OCURRENCES</h3>
                        <h3>SUCESS</h3>
                        <h3>FAILED</h3>
                        <h3 id={styles.actions}>ACTIONS</h3>
                    </div>

                </div>
                <hr id="divider" />
                <div className={styles.data}>
                    <div id={styles.list}>
                        <ul>
                            <li>144.224.23.49</li>
                            <li>administrador</li>
                            <li>40562</li>
                            <li id={styles.ocurrences}>5</li>
                            <li id={styles.ocurrences}>5</li>
                            <li id={styles.ocurrences}>2</li>
                        </ul>
                    </div>
                    <div className={styles.actionsData}>
                        <a id={styles.details} href="./details">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} fixedWidth size="40"/>
                        </a>
                        <Switch isOn={value} handleToggle={() => setValue(!value)} onColor="#F10707"></Switch>
                    </div>
                </div>
            </div>


        </>
    );
}

export default HomePage;