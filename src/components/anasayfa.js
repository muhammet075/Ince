import Image from "next/image";
import Link from "next/link";
import styles from "../styles/anasayfa.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

function Anasafya() {

const router = useRouter();
let totalClicks = 0;

useEffect(() => {

      const url = window.location.href;
      const parameters = url.split("/");
      const lastParameter = parameters[parameters.length - 1];
      console.log(lastParameter);
      if (!lastParameter === "islemler") {
        document.querySelector(".gerigitdugme").classList.add("displaynone");
      }



  localStorage.setItem("hesap", "TL");
  euro();
  let getItem = localStorage.getItem("hesap");
  console.log(getItem);


  let kullaniciIsim = localStorage.getItem("completeNaam");

  if (!localStorage.getItem("completeNaam")){
  document.querySelector(".isim").innerHTML = "Murat ÖZYURT";
  document.querySelector(".isim2").innerHTML = "Murat ÖZYURT";
  document.querySelector(".moneyprogressnamesend").innerHTML = "Murat ÖZYURT";
  } else {
  document.querySelector(".isim").innerHTML = kullaniciIsim;
  document.querySelector(".isim2").innerHTML = kullaniciIsim;
  document.querySelector(".moneyprogressnamesend").innerHTML = kullaniciIsim;;
  }

  let getEuro = localStorage.getItem("euro");

  let getEuroIslemler = localStorage.getItem("euroislemler");
  let euroTransactions = JSON.parse(getEuroIslemler);

  // Sorteer de euroTransactions op basis van de tijdstempel
  euroTransactions.sort((a, b) => {
    let timeA = a.tarih.split(":").join(""); // Verwijder ":" uit de tijdstempel
    let timeB = b.tarih.split(":").join(""); // Verwijder ":" uit de tijdstempel
    return timeB - timeA; // Sorteer van nieuwste naar oudste tijdstempel
  });

  let html = "";

function formatNumber(number) {
  return new Intl.NumberFormat("nl-NL").format(number);
}

for (let i = 0; i < euroTransactions.length; i++) {
  const formattedNumber = formatNumber(euroTransactions[i].fiyat);
  euroTransactions[i].fiyat = formattedNumber + ",00";
}
  

  for (let i = 0; i < Math.min(3, euroTransactions.length); i++) {
  let transactionDate = euroTransactions[i].tarih_formatted.split(" ")[0]; // Alleen de datum behouden
  html += `
      <a href="/islemler">
      <div>
        <section>
          <p>${euroTransactions[i].isim}</p>
          <p>${transactionDate}</p>
        </section>
        <section>
          <p>- ${euroTransactions[i].fiyat}</p>
          <p>€</p>
        </section>
      </div>
      </a>
    `;
}

  document.querySelector(".euroislemler").innerHTML = html;
  
}, []);

function generateRandomNumber() {
  const length = 8;
  let resultaat = "";
  for (let i = 0; i < length; i++) {
    resultaat += Math.floor(Math.random() * 10);
  }
  return resultaat;
}

function euro(){
  function formatNumber(number) {
    const parts = String(number).split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(",") + ",00";
  }

    const number = localStorage.getItem("euro");
    const formattedNumber = formatNumber(number);

    document.querySelector(".liradugme").classList.remove("aktivehesap");
    document.querySelector(".dolardugme").classList.remove("aktivehesap");
    document.querySelector(".eurodugme").classList.add("aktivehesap");

    document.querySelector(".hesapadi").innerHTML = "EURO HESAP";
    document.querySelector(".iban").innerHTML = "TR33 0006 3455 5663 3357 6713 16";
    document.querySelector(".hesapfiyat").innerHTML = formattedNumber;
    document.querySelector(".gondermebakiye").innerHTML = formattedNumber;
    document.querySelector(".parabirimlogo").innerHTML = "€";
    
    document.querySelector(".tlislemler").classList.add("displaynone");
    document.querySelector(".dolarislemler").classList.add("displaynone");

    document.querySelector(".euroislemler").classList.remove("displaynone");
}

function lira(){
  document.querySelector(".eurodugme").classList.remove("aktivehesap");
  document.querySelector(".dolardugme").classList.remove("aktivehesap");
  document.querySelector(".liradugme").classList.add("aktivehesap");

  document.querySelector(".hesapadi").innerHTML = "TÜRK LİRASİ HESAP";
  document.querySelector(".iban").innerHTML = "TR33 0004 1005 1978 6457 8413 26"
  document.querySelector(".hesapfiyat").innerHTML = "6.234,54";
  document.querySelector(".parabirimlogo").innerHTML = "₺";

  document.querySelector(".dolarislemler").classList.add("displaynone");
  document.querySelector(".euroislemler").classList.add("displaynone");
  document.querySelector(".tlislemler").classList.remove("displaynone");
}



function dolar() {
  document.querySelector(".eurodugme").classList.remove("aktivehesap");
  document.querySelector(".liradugme").classList.remove("aktivehesap");
  document.querySelector(".dolardugme").classList.add("aktivehesap");

  document.querySelector(".hesapadi").innerHTML = "ABD DOLAR HESAP";
  document.querySelector(".iban").innerHTML =
    "TR33 0044 2404 4473 6567 8883 10";
  document.querySelector(".hesapfiyat").innerHTML = "5,23";
  document.querySelector(".parabirimlogo").innerHTML = "$";

  document.querySelector(".euroislemler").classList.add("displaynone");
  document.querySelector(".tlislemler").classList.add("displaynone");
  document.querySelector(".dolarislemler").classList.remove("displaynone");
}




function paraGonder(){
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
    setTimeout(function () {
      document.querySelector("body").classList.add("noscroll");
      euro();
      document.querySelector(".paragonder").classList.remove("displaynone");
    }, 250);
}

function paraGonderKapat(){
    document.querySelector(".paragonder").classList.add("displaynone");
    window.location.reload();
}

function paraOnayla() {
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

  setTimeout(function () {
    document.querySelector("body").classList.add("noscroll");
    document.querySelector(".gonderilenmiktar").innerHTML = document.querySelector(".gonderilenpara").value + " €";
    document.querySelector(".gonderilenibanalani").innerHTML = document.querySelector(".gonderileniban").value.toUpperCase();
    document.querySelector(".paragonderislemesi").classList.add("displaynone");
    document.querySelector(".kontrolsorgulama").classList.remove("displaynone");
  }, 250);
}

  function parolaSorgulama() {
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

        var currentDate = new Date();
        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1;
        var year = currentDate.getFullYear();
        var hours = currentDate.getHours();
        var minutes = currentDate.getMinutes();
        var seconds = currentDate.getSeconds();

        if (month < 10) {
          month = "0" + month;
        }

        const randomNumber = generateRandomNumber();

        function unformatNumber(formattedNumber) {
          // Verwijder alle punten uit de string
          const unformattedString = formattedNumber.replace(/\./g, "");

          // Verwijder de komma en alles wat daarna komt
          const commaIndex = unformattedString.indexOf(",");
          const unformattedNumber = unformattedString.substring(0, commaIndex);

          // Converteer de string naar een getal en retourneer het
          return parseFloat(unformattedNumber);
        }

        const formattedNumber = document.querySelector(".gonderilenpara").value;
        const unformattedNumber = unformatNumber(formattedNumber);

        var newData = {
          isim: document.querySelector(".gonderilenisim").value.toUpperCase(),
          tarih: currentDate.toISOString().slice(0, 10),
          tarih_formatted:
            day +
            "-" +
            month +
            "-" +
            year +
            " " +
            hours +
            ":" +
            minutes +
            ":" +
            seconds,
          fiyat: unformattedNumber,
          iban: document.querySelector(".gonderileniban").value.toUpperCase(),
          key: randomNumber,
          ifade: document.querySelector(".odemeifade").value.toUpperCase(),
        };

        var existingData =
          JSON.parse(localStorage.getItem("euroislemler")) || [];
        existingData.unshift(newData); // Voeg nieuwe transactie toe aan het begin van de array

        existingData.sort(function (a, b) {
          var dateA = new Date(a.tarih_formatted);
          var dateB = new Date(b.tarih_formatted);
          return dateB - dateA;
        });

        localStorage.setItem("euroislemler", JSON.stringify(existingData));

        let getEuro = localStorage.getItem("euro");
        localStorage.setItem("euro", getEuro - unformattedNumber);


      document.querySelector(".kontrolsorgulama").classList.add("displaynone");
      document.querySelector(".spinneronaylanmasi").classList.remove("displaynone");

        setTimeout(function () {
          document.querySelector(".spinneronaylanmasi").classList.add("displaynone")
          document.querySelector(".onaylanmis").classList.remove("displaynone")
        }, 1000);

    } else if (totalClicks === 7) {
      totalClicks = 0;
    } else {
      console.log("Daha fazla tiklama yapildi.");
    }
  }


  function checkIban(){
    paraKontrolu();
    if (event.target.value.length > 17){
        document.querySelector(".gonderileniban").classList.add("iyiban");
        document.querySelector(".hm").classList.remove("displaynone");
    } else {
        document.querySelector(".gonderileniban").classList.remove("iyiban");
        document.querySelector(".hm").classList.add("displaynone")
    }
  }

function onaylanmisKapat(){
    window.location.reload();
}

function kurusEkle() {
  function formatNumber(number) {
    const parts = String(number).split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(",") + ",00";
  }

  function removeLeadingZero(number) {
    const parts = number.split(".");
    const integerPart = parts[0].replace(/^0+/, "");
    const formattedNumber = integerPart + (parts[1] ? "." + parts[1] : "");
    return formattedNumber || "0";
  }

  const number = document.querySelector(".gonderilenpara").value;
  const numberWithoutLeadingZero = removeLeadingZero(number);
  const formattedNumber = formatNumber(numberWithoutLeadingZero);

  document.querySelector(".gonderilenpara").value = formattedNumber;

  if (document.querySelector(".gonderilenpara").value === ",00") {
    document.querySelector(".gonderilenpara").value = "0,00";
    // document.querySelector(".gondermek1").classList.add("anticlick")
  }
}


function temizleLan(){
  document.querySelector(".gonderilenpara").value = "";
  paraKontrolu();
}

function spatieSil(){
  let gonderileniban = document.querySelector(".gonderileniban").value;
  let gonderilenibanZonderSpaties = gonderileniban.replace(/\s/g, "");

  document.querySelector(".gonderileniban").value = gonderilenibanZonderSpaties
}

function paraKontrolu() {
  let isim = document.querySelector(".gonderilenisim").value;
  let iban = document.querySelector(".gonderileniban").value;
  let para = document.querySelector(".gonderilenpara").value;

  if (isim.length > 1 && iban.length > 17 && para.length > 0 && para !== "0,00") {
    document.querySelector(".gondermek1").classList.remove("anticlick");
  } else {
    document.querySelector(".gondermek1").classList.add("anticlick");
  }
}

  return (
    <>
      <div className={styles.anasayfa + " birincikontainer"}>
        <section>
          <h2>Hoş Geldiniz</h2>
          <h1>
            Sayın <span className='isim'></span>
          </h1>
        </section>

        <section>
          <div>
            <button className='liradugme aktivehesap' onClick={lira}>
              <span>₺</span>
              <span>TL</span>
            </button>
            <button className='eurodugme' onClick={euro}>
              <span>€</span>
              <span>EURO</span>
            </button>
            <button className='dolardugme' onClick={dolar}>
              <span>$</span>
              <span>ABD DOLAR</span>
            </button>
            {/* <button>
              <span>+</span>
              <span>Ekle</span>
            </button> */}
          </div>

          <div>
            <p className='hesapadi'>TÜRK LİRASİ HESAP</p>

            <section>
              <div>
                <p className='isim2'></p>
                <p className='iban'>TR33 0006 1005 1978 6457 8413 26</p>
              </div>

              <div>
                <p className='hesapfiyat'>2.634,54</p>
                <p className='parabirimlogo'>₺</p>
              </div>
            </section>

            <section>
              <button onClick={paraGonder}>
                <span>
                  <img src='parayatirmak.svg' />
                </span>{" "}
                <span>Para Yatır</span>
              </button>
              <button onClick={paraGonder}>
                <span>
                  <img src='paragondermek.svg' />
                </span>{" "}
                <span>Para Gönder</span>
              </button>
              <button onClick={paraGonder}>
                <span>
                  <img src='qrkod.svg' />
                </span>{" "}
                <span>QR Kodu Oku</span>
              </button>
            </section>
            <section>
              <p>Son 3 İşlemler</p>
            </section>

            <section className='tlislemler islemlercard'>
              <div className='birincilantl'>
                <section>
                  <p>MIGROS HURRIYET CAD.</p>
                  <p>02-05-2023</p>
                </section>
                <section>
                  <p>- 545,00</p>
                  <p>₺</p>
                </section>
              </div>

              <div>
                <section>
                  <p>ERKAN KUYUMCU</p>
                  <p>12-03-2023</p>
                </section>
                <section>
                  <p>- 6.345,00</p>
                  <p>₺</p>
                </section>
              </div>

              <div>
                <section>
                  <p>ISTINYE PARK IST.</p>
                  <p>12-03-2023</p>
                </section>
                <section>
                  <p>- 345,95</p>
                  <p>₺</p>
                </section>
              </div>
            </section>

            <section className='dolarislemler islemlercard'>
              <div className='birincilantl'>
                <section>
                  <p>Alipay US LTD S.A</p>
                  <p>15-02-2023</p>
                </section>
                <section>
                  <p>- 9,52</p>
                  <p>$</p>
                </section>
              </div>

              <div>
                <section>
                  <p>STEAM PAYMENT</p>
                  <p>14-02-2023</p>
                </section>
                <section>
                  <p>- 45,00</p>
                  <p>$</p>
                </section>
              </div>

              <div>
                <section>
                  <p>STEAM PAYMENT</p>
                  <p>04-01-2023</p>
                </section>
                <section>
                  <p>- 15,00</p>
                  <p>$</p>
                </section>
              </div>
            </section>

            <section className='euroislemler islemlercard displaynone'></section>

            <Link href='/islemler' className='tumislemlerigor'>
              Tüm işlemleri gör
            </Link>
          </div>
        </section>
      </div>

      <div className={styles.paragonderkontainer + " paragonder displaynone"}>
        <div>
          <div className='paragonderislemesi'>
            <button onClick={paraGonderKapat} className='kapatmak1'>
              <span>✕</span>Kapat
            </button>

            <section>
              <div>
                <p className='moneyprogressnamesend'></p>
                <p>TR33 0006 3455 5663 3357 6713 16</p>
              </div>

              <div>
                <p className='gondermebakiye'></p>
                <p>€</p>
              </div>
            </section>

            <span className='gonderparalan'>
              <input
                type='text'
                pattern='[0-9]*'
                placeholder='0,00'
                maxlength='10'
                className='gonderilenpara'
                onBlur={kurusEkle}
                onClick={temizleLan}
                onChange={paraKontrolu}
              />
            </span>

            <input
              type='text'
              placeholder='İSİM'
              className='gonderilenisim'
              onChange={paraKontrolu}
            ></input>
            <input
              type='text'
              placeholder='İBAN NO.'
              className='gonderileniban'
              onChange={checkIban}
              onBlur={spatieSil}
            ></input>
            <p className='hm displaynone'>
              * İBAN yurtdışı'na aittır. İşlem en fazla 3 İş günü İçerİsİnde
              gerçekleştİrİlecektİr.
            </p>
            <input
              className='odemeifade'
              type='text'
              placeholder='ÖDEME İFADE'
            ></input>
            <section>
              <p>TAKVİM</p>
              <label class='toggle'>
                <input class='toggle-checkbox' type='checkbox' />
                <div class='toggle-switch'></div>
                <span class='toggle-label'>Bugün - Bir kez</span>
              </label>
            </section>

            <button onClick={paraOnayla} className='gondermek1 anticlick'>
              Gönder
            </button>
          </div>

          <div className='kontrolsorgulama displaynone'>
            <p>GÖNDERİLEN MİKTAR</p>
            <p className='gonderilenmiktar'></p>
            <br />
            <p>GÖNDERİLEN İBAN</p>
            <p className='gonderilenibanalani'></p>

            <ul className='butundotlar'>
              <li className='birincidot'></li>
              <li className='ikincidot'></li>
              <li className='ucuncudot'></li>
              <li className='dorduncudot'></li>
              <li className='besincidot'></li>
              <li className='altincidot'></li>
            </ul>

            <div className='sifrealanim'>
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
            <button className='guvenlikkapat' onClick={paraGonderKapat}>
              <span>✕</span>Kapat
            </button>
          </div>

          <div className='spinneronaylanmasi displaynone'>
            <div class='lds-dual-ring-giris'></div>
          </div>

          <div
            className={styles.onaylanmiskontainer + " onaylanmis displaynone"}
          >
            <div class='containercheck'>
              <div class='circle-border'></div>
              <div class='circle'>
                <div class='success'></div>
              </div>
            </div>

            <p>İşlemİnİz başarıyla geçekleştİ</p>
            <button onClick={onaylanmisKapat} className='gondermek2'>
              Devam
            </button>
            <button className='emailgonder sklamela'>E-Maİl Gönder</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Anasafya;
