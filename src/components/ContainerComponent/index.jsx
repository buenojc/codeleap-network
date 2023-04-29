import styles from './containerComponent.module.css'

export default function ContainerComponent( { children } ){
    return (
        <div className={styles.container}>{children}</div>
    )
}