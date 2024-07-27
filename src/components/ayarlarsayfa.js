import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ayarlarsayfa.module.css";

function Ayarlarsayfa() {


function saldoDegistir() {
  var inputElement = document.querySelector(".newsaldo");
  var newEuroValue = inputElement.value;

  // Controleer of de ingevoerde waarde een geldig getal is
  if (!isNaN(parseFloat(newEuroValue))) {
    // Verander de waarde van "euro" in localstorage
    localStorage.setItem("euro", newEuroValue);

    // Optioneel: geef een melding dat het saldo is gewijzigd
    alert("Bakiyeniz degistirildi")
    window.location = "/dashboard"

    // Optioneel: vernieuw de pagina of voer andere acties uit
    // location.reload();
    // ...
  } else {
    // Melding voor ongeldige invoer
    alert("Geçersiz Giriş. Lütfen geçerli bir sayı girin.");
  }
}





function isimDegistir() {
  var isimInput = document.querySelector(".isim");
  var soyisimInput = document.querySelector(".soyisim");

  var isim = isimInput.value.trim();
  var soyisim = soyisimInput.value.trim();

  if (isim !== "" && soyisim !== "") {
    // Elk woord in isim met een hoofdletter maken
    var isimWoorden = isim.split(" ");
    isimWoorden = isimWoorden.map(function (woord) {
      return woord.charAt(0).toUpperCase() + woord.slice(1).toLowerCase();
    });
    isim = isimWoorden.join(" ");

    // Alle letters van soyisim met hoofdletters maken
    soyisim = soyisim.toUpperCase();

    // Complete naam maken door voornaam en achternaam te combineren
    var completeNaam = isim + " " + soyisim;

    localStorage.setItem("completeNaam", completeNaam);
    alert("Isiminiz " + completeNaam + " olarak kaydedilmiştir.");
    window.location = "/dashboard";
  } else {
    alert("Lutfen tum alanlari doldurun.");
  }
}


    
    function opnieuw(){
        localStorage.removeItem('euro');
        localStorage.removeItem('euroislemler');
        localStorage.removeItem("hesap");
        localStorage.removeItem("completeNaam");
        window.location = "/";
    }

    

  return (
    <div className={styles.ayarlarsayfa}>
      <h1>Ayarlar</h1>

      <section>
        <p>EURO Hesap Bakiyeyi degistir:</p>
        <input
          type='text'
          pattern='[0-9]*'
          placeholder='0,00'
          maxlength='10'
          className='newsaldo'
        ></input>
        <button onClick={saldoDegistir}>Bakiyeyi Degistir</button>
      </section>

      <section>
        <p>Isiminizi degistir:</p>
        <input type='text' className='isim' placeholder='isim'></input>
        <input type='text' className='soyisim' placeholder='soyisim'></input>
        <button onClick={isimDegistir}>Isim Degistir</button>
      </section>

      <section>
        <p>Uygulamayi komple temizle, butun islemler silenecektir</p>
        <button onClick={opnieuw}>RESET APP</button>
      </section>
    </div>
  );
}

export default Ayarlarsayfa;
