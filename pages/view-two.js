// import styles from '../styles/Home.module.css';
import Register from '../components/Register';
import cookie from 'js-cookie';

export default function Viewtwo() {


 
  return (
    <div>
      <p>HOLA MUNDO</p>
      <button onClick={() => cookie.remove("token")}>Salir</button>
    </div>
  );
}
