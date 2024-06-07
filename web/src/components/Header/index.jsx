import { Link } from "react-router-dom" 
import styles from "./styles.module.css"

export default function Header(){
    return (
        <header>
            <div className={styles.container}>
                <h1>MarineLifeAware</h1>

                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                </nav>
            </div>

        </header>
    )
}