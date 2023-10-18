import Link from "next/link";
import Image from "next/image";
import styles from "./Defaultlayout.module.scss";

const DefaultLayout = ({ children }) => {
  return (
    <div className={styles.Navbar}>
      <ul className={styles.Navbar__List}>
        <li className={styles.Navbar__List__Child}>
            <Image src="/Logo.png" width={70} height={70}/>
        </li>
        <li className={styles.Navbar__List__Child}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.Navbar__List__Child}>
          <Link href="/LastCocktail">Ultimi cocktail</Link>
        </li>
      </ul>
      {children}
     
    </div>
  );
};

export default DefaultLayout;
