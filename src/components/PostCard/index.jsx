import styles from './postCard.module.css'
import DeleteIcon from '../../assets/delete-icon.svg'
import EditIcon from '../../assets/edit-icon.svg'

export default function PostCard(){
    return(
        <div className={styles.postCardWrapper}>
            <div className={styles.header}>
                <h2>My First Post</h2>

                <div className={styles.actionsWrapper}>
                    <span>
                        <img src={DeleteIcon} alt='Delete Post' />
                    </span>
                    <span>
                        <img src={EditIcon} alt='Edit Post' />
                    </span>
                </div>
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