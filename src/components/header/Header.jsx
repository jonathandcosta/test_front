import styles from './Header.module.css';
import Logo from '../../Assets/icons/logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="" />
    </header>
  );
};

export default Header;
