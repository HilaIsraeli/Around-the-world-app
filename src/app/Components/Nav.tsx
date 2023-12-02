import Link from 'next/link';
import styles from '../Styles/nav.module.css'; // Import your CSS module

const Navbar = () => {

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarBrand}>
          <Link href="/Home">
            Logo
          </Link>
        </div>
            <Link className={styles.navbarLinks} href="/Home">
              Home
            </Link>
      </div>
    </nav>
  );
};

export default Navbar;
