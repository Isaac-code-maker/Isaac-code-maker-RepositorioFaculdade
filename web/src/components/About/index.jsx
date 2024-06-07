import styles from "./styles.module.css"

export default function About(){
    return (
        <section className={styles.about}>
            <div className={styles.header}>
                <h1>SOBRE</h1>
            </div>     

            <main>
                <div className={styles.right}>
                    <div className={styles.image}>.</div>
                </div>

                <div className={styles.left}>
                    <h1>Nosso objetivo</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad optio expedita ducimus ab velit, commodi modi ipsum blanditiis eius cumque. Maxime enim voluptate officiis natus neque qui aliquid autem dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem similique deserunt quisquam magni cum est cumque architecto voluptatibus rem nam non sint quod voluptatem libero in, repellat cupiditate iure consectetur?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad optio expedita ducimus ab velit, commodi modi ipsum blanditiis eius cumque. Maxime enim voluptate officiis natus neque qui aliquid autem dicta.</p>
                </div>
            </main>
        </section>   
    )
}