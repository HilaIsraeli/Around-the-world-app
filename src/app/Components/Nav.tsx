import Link from "next/link";
import styles from "../Styles/nav.module.css"; // Import your CSS module

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarBrand}>M&M</div>
        <Link className={styles.navbarLinks} href="/Home">
          Home
        </Link>
        <Link className={styles.navbarLinks} href="/AddPlace">
          Add Place
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
