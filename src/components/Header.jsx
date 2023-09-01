
const Header = ({styles}) => {
    return (<div className={styles.header}>
        <div className={styles.title}>
            <h1 id={styles.titlePr}> Welcome to Dashboard </h1>
            <h5 id={styles.subtitle}> Log Visualization Interface </h5>
        </div>

        <div className={styles.user}>
            <h2 id={styles.userAb}>RS</h2>
            <h2 id={styles.userName}>Ronnildo</h2>
        </div>
    </div>);
}

export default Header;