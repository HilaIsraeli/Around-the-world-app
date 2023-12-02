import styles from "../Styles/page.module.css";
import worldMap from "../../Images/world_map.jpg";
import Image from "next/image";
import plus from "../../Images/plus.gif";

export default function Header() {
  return (
    <div className={styles.main}>
      <h1 className={styles.center_title}>Around the World App</h1>
      <h3 className={styles.center_title}>By M&M</h3>
      <span className={styles.center_title}>
        Start By Adding Your First Place
        <Image src={plus} alt="add a place" />
      </span>
      <Image className={styles.center_photo} src={worldMap} alt="worldMap" />
      <a target="_blank" href="https://icons8.com/icon/v0MYs9xpZeAg/plus">
        Plus
      </a>{" "}
      icon by{" "}
      <a target="_blank" href="https://icons8.com">
        Icons8
      </a>
    </div>
  );
}
