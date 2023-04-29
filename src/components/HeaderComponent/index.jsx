import { useDispatch } from 'react-redux';
import styles from './headerComponent.module.css'
import { setLogout } from '../../actions/loginActions';
import { useNavigate } from 'react-router-dom';

export default function HeaderComponent() {
  const dispatch = useDispatch()
  
  function handleLogout(){
    dispatch(setLogout())    
  }

  return (
    <header className={styles.header}>
      <h1>CodeLeap Network</h1>
      <span onClick={handleLogout}>Logout</span>
    </header>
  );
}
