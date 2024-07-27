import Link from "next/link";
import styles from "../styles/footer.module.css";

function Footer() {

  function openZiraat(){
    window.location = "https://bireysel.ziraatbank.com.tr/Transactions/Login/FirstLogin.aspx?"
  }

  return (
    <footer className={styles.footer}>
        <img src="footer.png" onClick={openZiraat}/>

        {/* <div onClick={openZiraat}>
          <img src="/qrkod.svg"/>
          <p>Yardim<br/> Merkezi</p>
        </div>

        <div onClick={openZiraat}>
          <img src="/qrkod.svg"/>
          <p>Yardim<br/> Merkezi</p>
        </div>

        <div onClick={openZiraat}>
          <img src="/qrkod.svg"/>
          <p>Yardim<br/> Merkezi</p>
        </div>

        <div onClick={openZiraat}>
          <img src="/qrkod.svg"/>
          <p>Yardim<br/> Merkezi</p>
        </div>

        <div onClick={openZiraat}>
          <img src="/qrkod.svg"/>
          <p>Yardim<br/> Merkezi</p>
        </div> */}

    </footer>
  );
}

export default Footer;
