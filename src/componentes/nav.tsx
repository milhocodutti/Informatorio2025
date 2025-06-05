import styles from './nav.module.css'



type NavProps = {}



function Nav(props: NavProps){
  const  {} = props;
  return (
    <nav className={styles.nav}>
      <ul className={styles.navlist}>
        <img className={styles.logo}></img>
        <li>
          <a href="#" className={styles.navlink}>Inicio</a>
        </li>
        <li>
          <a href="#" className={styles.navlink}>Géneros</a>
        </li>
        <li>
          <a href="#" className={styles.navlink}>Buscar</a>
        </li>
        <li>
          <a href="#" className={styles.navlink}>Novedades</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;