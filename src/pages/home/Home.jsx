import Header from "../../components/Header";
import styles from "./Home.module.css";

const HomePage = () => {
    return (
        <>
            <Header styles={styles}/>
            <div className={styles.dataContainer}>

            </div>
        </>
    );
}

export default HomePage;