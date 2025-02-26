import styles from './Title.module.css';
import { FaSearch } from 'react-icons/fa'; // Ícone de lupa

const Title = () => {
  return (
    <div className="container">
      <div className={styles.title}>
        <h1>Funcionários</h1>
        <div className={styles.container}>
          <input type="text" placeholder="Pesquisar" />
          <FaSearch className={styles.search} />
        </div>
      </div>
    </div>
  );
};

export default Title;
