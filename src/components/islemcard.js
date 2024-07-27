import Image from "next/image";
import Link from "next/link";
import styles from "../styles/islemcard.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Islemcard() {
  const router = useRouter();
  const [euroTransactions, setEuroTransactions] = useState([]);

  useEffect(() => {
    let getEuroIslemler = localStorage.getItem("euroislemler");
    let euroTransactions = JSON.parse(getEuroIslemler);
    setEuroTransactions(euroTransactions);
  }, []);


  function generateRandomString() {
    const cijfers = "0123456789";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let resultaat = "";
    for (let i = 0; i < 3; i++) {
      resultaat += cijfers.charAt(Math.floor(Math.random() * cijfers.length));
    }
    for (let i = 0; i < 4; i++) {
      resultaat += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return resultaat;
  }

  function openTransaction(){
    function findTransactionByKey(key) {
      let getEuroIslemler = localStorage.getItem("euroislemler");
      let euroTransactions = JSON.parse(getEuroIslemler);

      const foundTransaction = euroTransactions.find(
        (transaction) => transaction.key === key
      );

      return foundTransaction;
    }

    const transactionKey = event.target.classList[0];
    const foundTransaction = findTransactionByKey(transactionKey);

    const randomString = generateRandomString();


    if (foundTransaction) {
      console.log(foundTransaction);

      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

      function formatNumber(number) {
        const parts = String(number).split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return parts.join(",") + ",00";
      }

      const number = foundTransaction.fiyat;
      const formattedNumber = formatNumber(number);


        setTimeout(function () {
          document
            .querySelector(".alleurotransactions")
            .classList.add("displaynone");
        }, 500);

      setTimeout(function () {
        document.querySelector("body").classList.add("noscroll");
        document.querySelector(".transactiondetails").classList.remove("displaynone");
        document.querySelector(".isim").innerHTML = foundTransaction.isim;
        document.querySelector(".isim2").innerHTML =
          foundTransaction.isim + " " + randomString;
        document.querySelector(".fiyat").innerHTML = "- " + formattedNumber;
        document.querySelector(".tarih").innerHTML =
          foundTransaction.tarih_formatted.split(" ")[0];
        document.querySelector(".iban").innerHTML = foundTransaction.iban;

        if (foundTransaction.ifade === undefined) {
          document.querySelector(".odemeifadesi").innerHTML = "";
        } else {
          document.querySelector(".odemeifadesi").innerHTML =
            foundTransaction.ifade;
        }
      }, 250);
    } else {
        console.log("Transactie niet gevonden");
    }
  }

  function kapatTransaction(){
    document.querySelector(".transactiondetails").classList.add("displaynone");
    document.querySelector("body").classList.remove("noscroll");
    document.querySelector(".alleurotransactions").classList.remove("displaynone");
  }

  function goBack(){
    router.back();
  }

  function formatNumber(number) {
    const parts = number.toString().split(".");
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return integerPart;
  }

  return (
    <div className={styles.islemcard}>
      <div>
        <button className='gerigitdugmesi' onClick={goBack}>
          <img src='geribeyaz.svg' />
        </button>
        <h1>EURO İŞLEMLERİ LİSTESİ</h1>
      </div>
      <section className="alleurotransactions">
        {euroTransactions.map((transaction) => (
          <div
            key={transaction.tarih}
            className={transaction.key + " islemdugmesi"}
            onClick={openTransaction}
          >
            <section>
              <p>{transaction.isim}</p>
              <p>{transaction.tarih_formatted.split(" ")[0]}</p>
            </section>

            <section>
              <p>- {formatNumber(transaction.fiyat)},00 €</p>
            </section>

            <section>
              <img src='geri.svg' />
            </section>
          </div>
        ))}
      </section>

      <section className='transactiondetails displaynone'>
        <div>
          <div>
            <section>
              <p className='fiyat'></p>
              <p>€</p>
            </section>
            <section>
              <p className='isim'></p>
            </section>
          </div>

          <div>
            <section>
              <p>Tarİh:</p>
              <p className='tarih'></p>
            </section>
            <section>
              <p>Kesİlen Hesap:</p>
              <p>TR330006345556633357671316</p>
            </section>
            <section>
              <p>Yatirilan Hesap:</p>
              <p className='iban'></p>
            </section>

            <section>
              <p>Ödeme İfade:</p>
              <p className='odemeifadesi'></p>
              <p className='isim2'></p>
              <br />
              <p>T.C. KİMLİK NO: 3737495204</p>
              <br />
              <p>
                bu İşlem t.c. zİraat bankasi a.ş. ankara kamu kurumsal şubesİ
                tarafindan onaylanmistir
              </p>
            </section>

            <section>
              <button>
                <img src='/paylasbeyaz.svg' />
                Paylaş
              </button>
              <button>
                <img src='/email.svg' />
                E-Mail
              </button>
            </section>
          </div>
        </div>
        <button onClick={kapatTransaction} className='kapatdugmesiki'>
          <span>✕</span>Kapat
        </button>
      </section>
    </div>
  );
}

export default Islemcard;
