import { Link } from "react-router-dom" 
import styles from "./styles.module.css"

export default function Cta(){
    return (
        <section className={styles.cta}>
            <div className={styles.ctaa}>
                <div className={styles.overflow}>
                    <div className={styles.box}>
                    <h1>Marine Life Aware</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quasi dicta atque veritatis est consectetur, aliquid, doloremque sapiente nulla vitae suscipit quos. Libero, veritatis. Architecto atque ipsa delectus molestias magnam?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quasi dicta atque veritatis est consectetur, aliquid, doloremque sapiente nulla vitae suscipit quos. Libero, veritatis. Architecto atque ipsa delectus molestias magnam?</p>

                    <Link to="/">Saiba mais</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}