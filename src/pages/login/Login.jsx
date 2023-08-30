import { useState } from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Evinado form");
        navigate("/home")
    }
    return (
        <div className={styles.mainContent}>
            <div id={styles.container}>
                <h1 id={styles.titleLogin}>Sing In</h1>
                <form className={styles.myForm} onSubmit={handleSubmit}>
                    <label id={styles.labelForm}>
                        <input type="email" name="E-mail" className={styles.inputForm} placeholder='E-mail' />
                    </label>
                    <label id={styles.labelForm}>
                        <input type="password" name="Password" className={styles.inputForm} placeholder='Password' />
                    </label>
                    <a className={styles.reset} href="">Reset password?</a>
                    <a id={styles.home} href="/home">
                        <input type="submit" value="Sing In" id={styles.singIn} />
                    </a>
                </form>
            </div>
        </div>

    );
}

export default LoginPage;