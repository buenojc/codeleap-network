import styles from './postCard.module.css'

export default function PostCard(){
    return(
        <div className={styles.postCardWrapper}>
            <div className={styles.header}>
                <h2>My First Post</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.informationWrapper}>
                    <p>@victor</p>
                    <p>25 minutes ago</p>
                </div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, expedita! Non natus voluptates, nulla eum quos beatae ipsam labore eveniet a nesciunt aperiam praesentium lux odio incidunt ad. Voluptas, labore dolor.
                </p>
            </div>
        </div>
    )
}