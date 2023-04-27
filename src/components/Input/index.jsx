import styles from './input.module.css'

export default function Input({ type, children, name, placeholder }) {
  return (
    <div className={styles.inputWrapper}>
      <label className='labelInput' htmlFor={name}>{ children }</label>
      <input type={type} name={name} id={name} placeholder={placeholder} />
    </div>
  );
}
