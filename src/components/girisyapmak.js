import Image from "next/image";
import Link from "next/link";
import styles from "../styles/girisyapmak.module.css";
import { useEffect } from "react";

function Girisyapmak() {

  let totalClicks = 0;

useEffect(() => {
    document.querySelector("body").classList.add("noscroll");
    document.querySelector(".headerlink").classList.add("anticlick");
    document.querySelector(".cikisdugmesi").style.display = "none";
    document.querySelector("footer").style.display = "none";

      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      window.scrollTo(0, 0);
      window.scrollBy({
        top: -window.pageYOffset,
        left: 0,
        behavior: "smooth",
      });

    if (localStorage.getItem("euroislemler")) {
      
      console.log("Het item 'euroislemler' bestaat in de localStorage.");
  
    } else {
    
          let euroislemler;
          var today = new Date();
          var fiveDaysAgo = new Date(today.getTime() - 5 * 24 * 60 * 60 * 1000);
          var sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
          var tenDaysAgo = new Date(today.getTime() - 10 * 24 * 60 * 60 * 1000);
          var twelveDaysAgo = new Date(today.getTime() - 12 * 24 * 60 * 60 * 1000);
          var fourteenDaysAgo = new Date(today.getTime() - 14 * 24 * 60 * 60 * 1000);
          var fifteenDaysAgo = new Date(today.getTime() - 15 * 24 * 60 * 60 * 1000);
          var eighteenDaysAgo = new Date(today.getTime() - 18 * 24 * 60 * 60 * 1000);
          var twentyDaysAgo = new Date(today.getTime() - 20 * 24 * 60 * 60 * 1000);

          euroislemler = [
            {
              isim: "UNIBET LTD. MALTA",
              tarih: fiveDaysAgo.toISOString().substr(0, 10),
              tarih_formatted: fiveDaysAgo.toLocaleDateString('nl-NL', {day: '2-digit', month: '2-digit', year: 'numeric'}),
              fiyat: "100",
              iban: "TR044001002236445536111547",
              key: "00000001",
              ifade: "",
            },
            {
              isim: "UNIBET LTD. MALTA",
              tarih: fiveDaysAgo.toISOString().substr(0, 10),
              tarih_formatted: fiveDaysAgo.toLocaleDateString('nl-NL', {day: '2-digit', month: '2-digit', year: 'numeric'}),
              fiyat: "75",
              iban: "TR110116604666432117211299",
              key: "00000002",
              ifade: "Yok",
            },
            {
              isim: "ONLINE PAYMENTS FOUNDATION",
              tarih: sevenDaysAgo.toISOString().substr(0, 10),
              tarih_formatted: sevenDaysAgo.toLocaleDateString('nl-NL', {day: '2-digit', month: '2-digit', year: 'numeric'}),
              fiyat: "265",
              iban: "TR001022245667488337216780",
              key: "00000003",
              ifade: "",
            },
            {
              isim: "OSMAN HUNKAR",
              tarih: sevenDaysAgo.toISOString().substr(0, 10),
              tarih_formatted: sevenDaysAgo.toLocaleDateString('nl-NL', {day: '2-digit', month: '2-digit', year: 'numeric'}),
              fiyat: "100",
              iban: "TR370346333356773651123551",
              key: "00000004",
              ifade: "Knk sana para",
            },
            {
              isim: "ALI ATILLA CENK",
              tarih: tenDaysAgo.toISOString().substr(0, 10),
              tarih_formatted: tenDaysAgo.toLocaleDateString('nl-NL', {day: '2-digit', month: '2-digit', year: 'numeric'}),
              fiyat: "1000",
              iban: "TR570356054533251321258500",
              key: "00000005",
              ifade: "",
            },
            {
              isim: "ONLINE PAYMENTS FOUNDATION",
              tarih: tenDaysAgo.toISOString().substr(0, 10),
              tarih_formatted: tenDaysAgo.toLocaleDateString('nl-NL', {day: '2-digit', month: '2-digit', year: 'numeric'}),
              fiyat: "54",
              iban: "TR330006004556453337221566",
              key: "00000006",
              ifade: "",
            },
            {
              isim: "EMİR ŞAHİN",
              tarih: twelveDaysAgo.toISOString().substr(0, 10),
              tarih_formatted: twelveDaysAgo.toLocaleDateString('nl-NL', {day: '2-digit', month: '2-digit', year: 'numeric'}),
              fiyat: "200",
              iban: "TR123456789012345678901234",
              key: "00000007",
              ifade: "",
            },
            {
              isim: "MEHMET YILMAZ",
              tarih: fourteenDaysAgo.toISOString().substr(0, 10),
              tarih_formatted: fourteenDaysAgo.toLocaleDateString('nl-NL', {day: '2-digit', month: '2-digit', year: 'numeric'}),
              fiyat: "15",
              iban: "TR987654321098765432109876",
              key: "00000008",
              ifade: "",
            },
            {
              isim: "SEDA YILDIRIM",
              tarih: fifteenDaysAgo.toISOString().substr(0, 10),
              tarih_formatted: fifteenDaysAgo.toLocaleDateString('nl-NL', {day: '2-digit', month: '2-digit', year: 'numeric'}),
              fiyat: "45",
              iban: "TR567890123456789012345678",
              key: "00000009",
              ifade: "Ödeme alındı",
            },
            {
              isim: "MEHMET YILMAZ",
              tarih: eighteenDaysAgo.toISOString().substr(0, 10),
              tarih_formatted: eighteenDaysAgo.toLocaleDateString('nl-NL', {day: '2-digit', month: '2-digit', year: 'numeric'}),
              fiyat: "10",
              iban: "TR246801357924680135792468",
              key: "00000010",
              ifade: "",
            },
            {
              isim: "MEHMET YILMAZ",
              tarih: twentyDaysAgo.toISOString().substr(0, 10),
              tarih_formatted: twentyDaysAgo.toLocaleDateString('nl-NL', {day: '2-digit', month: '2-digit', year: 'numeric'}),
              fiyat: "750",
              iban: "TR135792468013579246801357",
              key: "00000011",
              ifade: "Ödeme bekleniyor",
            },
            {
              isim: "GÜL DEMİR",
              tarih: twentyDaysAgo.toISOString().substr(0, 10),
              tarih_formatted: twentyDaysAgo.toLocaleDateString('nl-NL', {day: '2-digit', month: '2-digit', year: 'numeric'}),
              fiyat: "132",
              iban: "TR802468013579246801357924",
              key: "00000012",
              ifade: "",
            },
          ];
    
      localStorage.setItem("euroislemler", JSON.stringify(euroislemler));
      localStorage.setItem("euro", "9948");

      console.log("Het item 'euroislemler' bestaat niet in de localStorage.");
  }
  
  
}, []);

  function girisyap(){
    document.querySelector(".displaynone").classList.remove("displaynone");

    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    window.scrollTo(0, 0);
    window.scrollBy({
      top: -window.pageYOffset,
      left: 0,
      behavior: "smooth",
    });

    document.querySelector("header").scrollIntoView({ behavior: "smooth" });

    document.querySelector("body").classList.add("noscroll");

  }

  function parolaSorgulama(){

    totalClicks += 1;

    if (totalClicks === 0) {
        console.log("sifir");
    } else if (totalClicks === 1) {
        console.log("bir");
        document.querySelector(".birincidot").classList.add("doldurulandot");
    } else if (totalClicks === 2) {
        console.log("iki");
        document.querySelector(".ikincidot").classList.add("doldurulandot");
    } else if (totalClicks === 3) {
        console.log("uc");
        document.querySelector(".ucuncudot").classList.add("doldurulandot");
    } else if (totalClicks === 4) {
        console.log("dort");
        document.querySelector(".dorduncudot").classList.add("doldurulandot");
    } else if (totalClicks === 5) {
        console.log("bes");
        document.querySelector(".besincidot").classList.add("doldurulandot");
    } else if (totalClicks === 6) {
        console.log("alti");
        document.querySelector(".altincidot").classList.add("doldurulandot");
        document.querySelector(".sifrealani").classList.add("displaynone");
        document.querySelector(".lds-dual-ring-giris").classList.remove("displaynone");
        setTimeout(function () {
            window.location = "/dashboard"
        }, 500);
    } else if (totalClicks === 7) {
        totalClicks = 0;
    } else {
        console.log("Daha fazla tiklama yapildi.");
    }

  }

  function kapatDugmesi(){
    window.location.reload();
  }

  function ziraatYonlendir(){
    window.location = "https://bireysel.ziraatbank.com.tr/Transactions/Online/Default.aspx?txns=OnlineApp&customerType=rtl"
  }

  return (
    <>
      <div className={styles.girisyapmak + " birincikontainer"}>
        <p>Mobil Bankacılık Uygulamamıza</p>
        <h1>Hoş Geldiniz</h1>

        <section>
          <button onClick={girisyap}>Gİrİş Yap</button>
          <button onClick={ziraatYonlendir}>Zİraat'lİ olmak İstİyorum</button>
        </section>

        <img src='/reklam2.jpeg' className='reklam2'/>

      </div>

      <div className={styles.ikinci + " ikincikontainer displaynone"}>
        <div>
          <p>Mobil Bankacılık Uygulamamıza</p>
          <h2>Hoş Geldiniz</h2>

          <ul>
            <li className='birincidot'></li>
            <li className='ikincidot'></li>
            <li className='ucuncudot'></li>
            <li className='dorduncudot'></li>
            <li className='besincidot'></li>
            <li className='altincidot'></li>
          </ul>

          <div className='sifrealani'>
            <section>
              <button onClick={parolaSorgulama}>1</button>
              <button onClick={parolaSorgulama}>2</button>
              <button onClick={parolaSorgulama}>3</button>
            </section>
            <section>
              <button onClick={parolaSorgulama}>4</button>
              <button onClick={parolaSorgulama}>5</button>
              <button onClick={parolaSorgulama}>6</button>
            </section>
            <section>
              <button onClick={parolaSorgulama}>7</button>
              <button onClick={parolaSorgulama}>8</button>
              <button onClick={parolaSorgulama}>9</button>
            </section>
            <section>
              <button onClick={parolaSorgulama}>
                <img src='/faceid.svg' />
              </button>
              <button onClick={parolaSorgulama}>0</button>
              <button onClick={parolaSorgulama}>
                <img src='/silmek.svg' />
              </button>
            </section>
          </div>

          <div class='lds-dual-ring-giris displaynone'></div>

          <button className={styles.kapatdugmesi} onClick={kapatDugmesi}>
            <span>✕</span>Kapat
          </button>
        </div>
      </div>
    </>
  );
}

export default Girisyapmak;
