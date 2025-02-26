import styles from './Title.module.css';

const Title = () => {
  return (
    <div className="container">
      <div className={styles.title}>
        <h1>Funcionários</h1>
        <input type="text" placeholder="Pesquisar" />
      </div>
    </div>
  );
};

export default Title;
