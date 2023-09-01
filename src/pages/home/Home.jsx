import Header from "../../components/Header";
import styles from "./Home.module.css";

const HomePage = () => {
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
                <div id="lista">
                    <ul>
                        <li>144.224.23.49</li>
                        <li>administrador</li>
                        <li>40562</li>
                        <li>5</li>
                        <li>5</li>
                        <li>2</li>
                    </ul>
                </div>
                <button value="Click">Enviar</button>
            </div>


        </>
    );
}

export default HomePage;