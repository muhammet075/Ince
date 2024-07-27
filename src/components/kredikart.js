import Link from "next/link";
import styles from "../styles/kredikart.module.css";
import { useEffect } from "react";

function Kredikart() {

useEffect(() => {
  let kullaniciIsim = localStorage.getItem("completeNaam");

  if (!localStorage.getItem("completeNaam")) {
    document.querySelector(".kredikartisim").innerHTML = "Murat ÖZYURT";
  } else {
    document.querySelector(".kredikartisim").innerHTML = kullaniciIsim;
  }
}, []);

  return (
    <div className={styles.kredikart}>
      <h2>Kredi Kartiniz</h2>
      <section>
        <div>
          <img src='/siyahlogo.png' />
        </div>

        <div>
          <p>
            5004 6004 2949 <span></span>
            <span></span>
            <span></span>
            <span></span>
          </p>
          <p>VALID 05/29</p>
          <p className='kredikartisim'></p>
          <img src='/temassiz.png' />
        </div>

        <div>
          <img src='/mastercard.png' />
        </div>
      </section>

      <section>
        <button><img src="/kartgoz.png"/></button>
        <button><img src="/kartkilit.png"/></button>
        <button><img src="/kartayarlar.png"/></button>
      </section>

      <img src="/reklam1.jpeg" className="reklam1"/>
      
    </div>
  );
}

export default Kredikart;
