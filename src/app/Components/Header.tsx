import styles from "../Styles/page.module.css";
import worldMap from "../../photos/world_map.jpg";
import Image from "next/image";

export default function Header() {
  return (
    <div className={styles.main}>
      <h1 className={styles.center_title}>Around the World App</h1>
      <h3 className={styles.center_title}>By M&M</h3>
      <Image className={styles.center_photo} src={worldMap} alt="worldMap" />
    </div>
  );
}
