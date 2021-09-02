import { FaGithub } from 'react-icons/fa'; // font-awesome
import { FiX } from 'react-icons/fi'; // font-awesome

import styles from './styles.module.scss';

export function SignInButton() {
    const isUserLoggedIn = true;
    
    return isUserLoggedIn ? (
        <button type="button" className={styles.signInButton}>
            <FaGithub color="#04d361"/>
            Henrique Barros
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : (
        <button type="button" className={styles.signInButton}>
            <FaGithub color="#e0a417"/>
            Sign in with Github
        </button>       
    );
}