import styles from './Header.module.css';
import Logo from '../../Assets/icons/logo.svg';

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <img src={Logo} alt="" />
      </header>
    </div>
  );
};

export default Header;
