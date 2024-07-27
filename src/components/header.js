import Image from "next/image";
import Link from "next/link";
import styles from "../styles/header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link href='/ayarlar' className='ayarlardugmesi'>
        <img src='/ayarlar.svg' />
      </Link>

      <Link href='/dashboard' className='headerlink'>
        <img src='/beyazlogo.svg' />
      </Link>

      <Link
        href='https://bireysel.ziraatbank.com.tr/Transactions/General/GenericHelpPage.aspx'
        className='yardimdugmesi'
      >
        <img src='/yardim.svg' />
      </Link>
      <Link href='/' className='cikisdugmesi'>
        <img src='/cikis.svg' />
      </Link>
    </header>
  );
}

export default Header;
