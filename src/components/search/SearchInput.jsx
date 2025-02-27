import styles from './SearchInput.module.css';
import { FaSearch } from 'react-icons/fa'; // Ícone de lupa

const SearchInput = () => {
  return (
    <div className={styles.title}>
      <h1>Funcionários</h1>
      <div className={styles.container}>
        <input type="text" placeholder="Pesquisar" />
        <FaSearch className={styles.search} />
      </div>
    </div>
  );
};

export default SearchInput;
