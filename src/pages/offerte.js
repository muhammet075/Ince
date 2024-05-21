import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/offerte.module.css";

import Renovatie from "@/assets/offerteicons/renovatie.svg";
import Nieuwbouw from "@/assets/offerteicons/nieuwbouw.svg";
import Plafond from "@/assets/offerteicons/plafond.svg";
import Murenbinnen from "@/assets/offerteicons/murenbinnen.svg";
import Murenbuiten from "@/assets/offerteicons/murenbuiten.svg";
import Deur from "@/assets/offerteicons/deur.svg";
import Kozijn from "@/assets/offerteicons/kozijn.svg";
import Houtwerk from "@/assets/offerteicons/houtwerk.svg";
import Behangklaar from "@/assets/offerteicons/behangklaar.svg";
import Schilderklaar from "@/assets/offerteicons/schilderklaar.svg";
import Fijnekorrel from "@/assets/offerteicons/fijnekorrel.svg";
import greenCheck from "@/assets/icons/greencheck.svg";



export default function Offerte() {

  useEffect(() => {
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function restrictToNumbers(event) {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]+/g, '');
  }

  function stap1Uitvoeren(){

    document.querySelector("#nieuwbouwwoningradio").parentElement.classList.remove("gekozenstap");
    document.querySelector("#renovatiewoningradio").parentElement.classList.remove("gekozenstap");

    event.target.parentElement.classList.add("gekozenstap");

    sessionStorage.setItem("stap1", event.target.value);

    document.querySelector("#stap1error").classList.add("displaynone");
  }

  function checkStap1(){
    if (!document.querySelector("#nieuwbouwwoningradio").checked && !document.querySelector("#renovatiewoningradio").checked){
      document.querySelector("#stap1error").classList.remove("displaynone");
    } else{
      document.querySelector("#stap1").classList.remove("activestap");
      document.querySelector("#stap2").classList.add("activestap");

      document.querySelector("#offerstestap1").classList.add("displaynone");
      document.querySelector("#offerstestap2").classList.remove("displaynone");
      document.querySelector('#offerteform').scrollIntoView({ behavior: 'smooth' });
    }
  }





  function stap2Uitvoeren(){
    const muurbuitencheckbox = document.querySelector("#muurbuitencheckbox");
    const muurbinnencheckbox = document.querySelector("#muurbinnencheckbox");
    const plafondscheckbox = document.querySelector("#plafondscheckbox");

    document.querySelector("#stap2error").classList.add("displaynone");
    
    let gekozenOpties = [];
    
    if (muurbuitencheckbox.checked) {
      gekozenOpties.push("Muren Buiten");
    }
    if (muurbinnencheckbox.checked) {
      gekozenOpties.push("Muren Binnen");
    }
    if (plafondscheckbox.checked) {
      gekozenOpties.push("Plafonds");
    }
    
    let gekozenOptiesString = gekozenOpties.join(", ");
    console.log(gekozenOptiesString.toString());    

    sessionStorage.setItem("stap2", gekozenOptiesString.toString());

    if (!event.target.parentElement.classList.contains("gekozenstap")){
      event.target.parentElement.classList.add("gekozenstap")
    } else{
        event.target.parentElement.classList.remove("gekozenstap")
    }

  }
  
  function checkStap2(){
    const muurbuitencheckbox = document.querySelector("#muurbuitencheckbox");
    const muurbinnencheckbox = document.querySelector("#muurbinnencheckbox");
    const plafondscheckbox = document.querySelector("#plafondscheckbox");

    if (!muurbuitencheckbox.checked && !muurbinnencheckbox.checked && !plafondscheckbox.checked){
      document.querySelector("#stap2error").classList.remove("displaynone");
    } else{
      document.querySelector("#stap2").classList.remove("activestap");
      document.querySelector("#stap3").classList.add("activestap");
      document.querySelector("#offerstestap2").classList.add("displaynone");
      document.querySelector("#offerstestap3").classList.remove("displaynone");
      document.querySelector('#offerteform').scrollIntoView({ behavior: 'smooth' });
    }
  }

  function terugStap1(){
    document.querySelector("#stap2").classList.remove("activestap");
    document.querySelector("#stap1").classList.add("activestap");
    document.querySelector("#offerstestap2").classList.add("displaynone");
    document.querySelector("#offerstestap1").classList.remove("displaynone");
    document.querySelector('#offerteform').scrollIntoView({ behavior: 'smooth' });
  }










  function stap3Uitvoeren(){
    const behangklaarcheckbox = document.querySelector("#behangklaarcheckbox");
    const schilderklaarcheckbox = document.querySelector("#schilderklaarcheckbox");
    const spachtelputzcheckbox = document.querySelector("#spachtelputzcheckbox");
    
    document.querySelector("#stap3error").classList.add("displaynone");

    let gekozenOpties = [];
    
    if (behangklaarcheckbox.checked) {
      gekozenOpties.push("Behangklaar Stuken");
    }
    if (schilderklaarcheckbox.checked) {
      gekozenOpties.push("Schilderklaar Stuken");
    }
    if (spachtelputzcheckbox.checked) {
      gekozenOpties.push("Spachtelputz Stuken");
    }
    
    let gekozenOptiesString = gekozenOpties.join(", ");
    console.log(gekozenOptiesString.toString());    

    sessionStorage.setItem("stap3", gekozenOptiesString.toString());

    if (!event.target.parentElement.classList.contains("gekozenstap")){
      event.target.parentElement.classList.add("gekozenstap")
    } else{
        event.target.parentElement.classList.remove("gekozenstap")
    }

  }

  function checkStap3(){
    const behangklaarcheckbox = document.querySelector("#behangklaarcheckbox");
    const schilderklaarcheckbox = document.querySelector("#schilderklaarcheckbox");
    const spachtelputzcheckbox = document.querySelector("#spachtelputzcheckbox");

    if (!behangklaarcheckbox.checked && !schilderklaarcheckbox.checked && !spachtelputzcheckbox.checked){
      document.querySelector("#stap3error").classList.remove("displaynone");
    } else{
      document.querySelector("#stap3").classList.remove("activestap");
      document.querySelector("#stap4").classList.add("activestap");
      document.querySelector("#offerstestap3").classList.add("displaynone");
      document.querySelector("#offerstestap4").classList.remove("displaynone");
      document.querySelector('#offerteform').scrollIntoView({ behavior: 'smooth' });
    }
  }

  function terugStap2(){
    document.querySelector("#stap3").classList.remove("activestap");
    document.querySelector("#stap2").classList.add("activestap");
    document.querySelector("#offerstestap3").classList.add("displaynone");
    document.querySelector("#offerstestap2").classList.remove("displaynone");
    document.querySelector('#offerteform').scrollIntoView({ behavior: 'smooth' });
  }







  


  


  function stap4Uitvoeren(){
    const murenbinnenschilderencheckbox = document.querySelector("#murenbinnenschilderencheckbox");
    const murenbuitenschilderencheckbox = document.querySelector("#murenbuitenschilderencheckbox");
    const plafondschilderencheckbox = document.querySelector("#plafondschilderencheckbox");
    const deurenschilderencheckbox = document.querySelector("#deurenschilderencheckbox");
    const kozijnenschilderencheckbox = document.querySelector("#kozijnenschilderencheckbox");
    const overigehoutwerkschilderencheckbox = document.querySelector("#overigehoutwerkschilderencheckbox");
    
    document.querySelector("#stap3error").classList.add("displaynone");

    let gekozenOpties = [];
    
    if (murenbinnenschilderencheckbox.checked) {
      gekozenOpties.push("Muren Binnen Schilderen");
    }
    if (murenbuitenschilderencheckbox.checked) {
      gekozenOpties.push("Muren Buiten Schilderen");
    }
    if (plafondschilderencheckbox.checked) {
      gekozenOpties.push("Plafonds Schilderen");
    }
    if (deurenschilderencheckbox.checked) {
      gekozenOpties.push("Deuren Schilderen");
    }
    if (kozijnenschilderencheckbox.checked) {
      gekozenOpties.push("Kozijnen Schilderen");
    }
    if (overigehoutwerkschilderencheckbox.checked) {
      gekozenOpties.push("Overige Houtwerk Schilderen");
    }

    let gekozenOptiesString = gekozenOpties.join(", ");
    console.log(gekozenOptiesString.toString());    

    sessionStorage.setItem("stap4", gekozenOptiesString.toString());

    if (!event.target.parentElement.classList.contains("gekozenstap")){
      event.target.parentElement.classList.add("gekozenstap")
    } else{
        event.target.parentElement.classList.remove("gekozenstap")
    }

  }

  function checkStap4(){

    if (sessionStorage.getItem("stap4") === null || sessionStorage.getItem("stap4") === "") {
      sessionStorage.setItem("stap4", "Geen ");
    }

    document.querySelector("#stap4").classList.remove("activestap");
    document.querySelector("#stap5").classList.add("activestap");
    document.querySelector("#offerstestap4").classList.add("displaynone");
    document.querySelector("#offerstestap5").classList.remove("displaynone");
    document.querySelector('#offerteform').scrollIntoView({ behavior: 'smooth' });

  }


  function terugStap3(){
    document.querySelector("#stap4").classList.remove("activestap");
    document.querySelector("#stap3").classList.add("activestap");
    document.querySelector("#offerstestap4").classList.add("displaynone");
    document.querySelector("#offerstestap3").classList.remove("displaynone");
    document.querySelector('#offerteform').scrollIntoView({ behavior: 'smooth' });
  }















  function stap5Uitvoeren(){
    event.target.parentElement.classList.remove("notselected");
    event.target.classList.remove("notselected");
    document.querySelector("#stap5error").classList.add("displaynone");
  }

  function checkStap5(){
  
    const voornaam = document.querySelector("#voornaam").value.trim();
    const achternaam = document.querySelector("#achternaam").value.trim();
    const email = document.querySelector("#email").value.trim();
    const telefoonnummer = document.querySelector("#telefoonnummer").value.trim();
    const woonplaats = document.querySelector("#woonplaats").value.trim();
    const startdatum = document.querySelector("#startdatum").value.trim();
    const antwoord = document.querySelector("#antwoordform").value.trim();

    let bedrijfsnaam;
    let bestand;

    if (document.querySelector("#bedrijfsnaam").value.lenght === 0){ 
      bedrijfsnaam = "Niet van toepassing";
    } else{
      bedrijfsnaam = document.querySelector("#bedrijfsnaam").value.trim();
    }

    if (document.querySelector("#bestand").value.lenght === 0){ 
      bestand = "Niet van toepassing";
    } else{
      bestand = document.querySelector("#bestand").value;
    }



    if (voornaam === "" || achternaam === "" || !isValidEmail(email) || telefoonnummer === "" || woonplaats === "" || antwoord === ""){

      document.querySelector("#stap5error").classList.remove("displaynone");

      if (voornaam === ""){
        document.querySelector("#voornaam").parentElement.classList.add("notselected") 
      }

      if (!isValidEmail(email)){
        document.querySelector("#email").parentElement.classList.add("notselected") 
      }

      if (achternaam === ""){
        document.querySelector("#achternaam").parentElement.classList.add("notselected") 
      }

      if (telefoonnummer === ""){
        document.querySelector("#telefoonnummer").parentElement.classList.add("notselected") 
      }

      if (woonplaats === ""){
        document.querySelector("#woonplaats").parentElement.classList.add("notselected") 
      }

      if (antwoord === ""){
        document.querySelector("#antwoordform").classList.add("notselected") 
      }


    } else if (parseInt(antwoord) !== 4) {

    
      alert("Het antwoord op de rekensom is onjuist. Probeer het nogmaals.");
   

      if (antwoord !== 4) {
          document.querySelector("#antwoordform").classList.add("notselected");
      }
      

  } else{

      const stap5gegevens = {
        voornaam: voornaam,
        achternaam: achternaam,
        bedrijfsnaam: bedrijfsnaam,
        email: email,
        telefoonnummer: telefoonnummer,
        woonplaats: woonplaats,
        startdatum: startdatum,
        bestand: bestand,
      }

      const emailData = {
        stap1: sessionStorage.getItem("stap1"),
        stap2: sessionStorage.getItem("stap2"),
        stap3: sessionStorage.getItem("stap3"),
        stap4: sessionStorage.getItem("stap4"),
        stap5: stap5gegevens,
      }

      console.log(emailData)

      document.querySelector("#offerstestap5").classList.add("displaynone");
      document.querySelector("#loadingstate").classList.remove("displaynone");
      document.querySelector('#offerteform').scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        document.querySelector("#loadingstate").classList.add("displaynone");
        document.querySelector("#successtate").classList.remove("displaynone");
        document.querySelector('#offerteform').scrollIntoView({ behavior: 'smooth' });
      }, 2000);

    }
}



  function terugStap4(){
    document.querySelector("#stap5").classList.remove("activestap");
    document.querySelector("#stap4").classList.add("activestap");
    document.querySelector("#offerstestap5").classList.add("displaynone");
    document.querySelector("#offerstestap4").classList.remove("displaynone");
    document.querySelector('#offerteform').scrollIntoView({ behavior: 'smooth' });
  }







  return (
    <>
    <Head>
        <title>Stukadoorsbedrijf Ince - Offerte</title>
        <meta name="description" content="Vraag nu een offerte aan bij Stukadoorsbedrijf Ince voor hoogwaardig stucwerk, schilderwerk en meer. Ontvang een nauwkeurige en vrijblijvende prijsopgave voor uw project."/>
        <meta name="og:description" content="Vraag nu een offerte aan bij Stukadoorsbedrijf Ince voor hoogwaardig stucwerk, schilderwerk en meer. Ontvang een nauwkeurige en vrijblijvende prijsopgave voor uw project."/>
        <meta name="keywords" content="offerte, stukadoorsbedrijf ince, stucwerk, schilderwerk, prijsopgave"/>
        <meta property="og:url" content="https://www.stukadoorsbedrijfince.nl/offerte"/>
        <meta property="og:title" content="Stukadoorsbedrijf Ince - Offerte"/>
    </Head>

      <div className="pagehero offertepage">
        <div>
          <div>
            <section>
              <h1>Offerte</h1>
              <ul className="breadcrumb">
                <li><Link href="/">Home</Link></li>
                <li>Offerte</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <div className={styles.offerte} id="offerteform">
        <div>

        <div>
          <ul>
            <li id="stap1" className="activestap">
              <p>1.</p>
              <p>Woning</p>
            </li>
            <li id="stap2">
              <p>2.</p>
              <p>Wat Stuken?</p>
            </li>
            <li id="stap3">
              <p>3.</p>
              <p>Hoe Stuken?</p>
            </li>
            <li id="stap4">
              <p>4.</p>
              <p>Schilderen</p>
            </li>
            <li id="stap5">
              <p>5.</p>
              <p>Afronden</p>
            </li>
          </ul>
        </div>

        <div>
        
          <section id="offerstestap1">
            <h2>1. Kies uw type woning</h2>  
            <p>Heeft u een nieuwbouw woning of wilt u uw woning renoveren?</p>

            <ul>
              <li>
                <input type="radio" id="nieuwbouwwoningradio" class="woningsoort" name="woningsoort" value="Nieuwbouwwoning" onClick={stap1Uitvoeren}/>
                <label for="nieuwbouwwoningradio" id="nieuwbouwwoning"><Image src={Nieuwbouw} alt="Nieubouw icoon"/>Nieuwbouw</label>
              </li>
              <li>
                <input type="radio" id="renovatiewoningradio" class="woningsoort" name="woningsoort" value="Renovatiewoning" onClick={stap1Uitvoeren}/>
                <label for="renovatiewoningradio" id="renovatiewoning"><Image src={Renovatie} alt="Renovatie icoon"/>Renovatie</label>
              </li>
           </ul>

           <p className="offerteerror displaynone" id="stap1error">Kies eerst je type woning.</p>

            <button className="displaynone"></button>
            <button onClick={checkStap1}>Volgende stap</button>
          </section>



          <section id="offerstestap2" className="displaynone">
            <h2>2. Wat moeten wij Stuken?</h2>
            <p>Meerdere keuzes mogelijk.</p>

            <ul>
              <li>
                <input type="checkbox" id="muurbuitencheckbox" class="muursoort" name="muursoort" value="MurenBuiten" onClick={stap2Uitvoeren}/>
                <label for="muurbuitencheckbox" id="muurbuiten"><Image src={Murenbuiten} alt="Muren buiten icoon"/>Muren Buiten</label>
              </li>
              <li>
                <input type="checkbox" id="muurbinnencheckbox" class="muursoort" name="muursoort" value="MurenBinnen" onClick={stap2Uitvoeren}/>
                <label for="muurbinnencheckbox" id="muurbinnen"><Image src={Murenbinnen} alt="Muren binnen icoon"/>Muren Binnen</label>
              </li>

              <li>
                <input type="checkbox" id="plafondscheckbox" class="muursoort" name="muursoort" value="Plafonds" onClick={stap2Uitvoeren}/>
                <label for="plafondscheckbox" id="plafonds"><Image src={Plafond} alt="Plafond icoon"/>Plafonds</label>
              </li>
           </ul>

           <p className="offerteerror displaynone" id="stap2error">Kies minimaal 1 optie.</p>

            <button onClick={terugStap1}>Vorige stap</button>
            <button onClick={checkStap2}>Volgende stap</button>
          </section>



          <section id="offerstestap3" className="displaynone">
            <h2>3. Hoe moeten wij het Stuken?</h2>
            <p>Meerdere keuzes mogelijk.</p>

            <ul>
              <li>
                <input type="checkbox" id="behangklaarcheckbox" class="stucsoort" name="stucsoort" value="BehangklaarStuken" onClick={stap3Uitvoeren}/>
                <label for="behangklaarcheckbox" id="behangklaar"><Image src={Behangklaar} alt="Behang klaar Stuken icoon"/>Behangklaar Stuken</label>
              </li>

              <li>
                <input type="checkbox" id="schilderklaarcheckbox" class="stucsoort" name="stucsoort" value="SchilderklaarStuken" onClick={stap3Uitvoeren}/>
                <label for="schilderklaarcheckbox" id="schilderklaar"><Image src={Schilderklaar} alt="Schilder klaar Stuken icoon"/>Schilderklaar Stuken</label>
              </li>
              <li>
                <input type="checkbox" id="spachtelputzcheckbox" class="stucsoort" name="stucsoort" value="Spachtelputz Stuken" onClick={stap3Uitvoeren}/>
                <label for="spachtelputzcheckbox" id="spachtelputz"><Image src={Fijnekorrel} alt="Spachtelputz fijne korrel Stuken icoon"/>Spachtelputz (Fijne Korrel) Stuken</label>
              </li>
            </ul>

            <p className="offerteerror displaynone" id="stap3error">Kies minimaal 1 optie.</p>

            <button onClick={terugStap2}>Vorige stap</button>
            <button onClick={checkStap3}>Volgende stap</button>
          </section>





          <section id="offerstestap4" className="displaynone">
            <h2>4. Wat moet er geschilderd worden?</h2>
            <p>Meerdere keuzes mogelijk.</p>

            <ul>
              <li>
                <input type="checkbox" id="murenbinnenschilderencheckbox" class="schildersoort" name="schildersoort" value="MurenBinnenSchilderen" onClick={stap4Uitvoeren}/>
                <label for="murenbinnenschilderencheckbox" id="murenbinnenschilderen"><Image src={Murenbinnen} alt="Muren binnen icoon"/>Muren Binnen</label>
              </li>

              <li>
                <input type="checkbox" id="murenbuitenschilderencheckbox" class="schildersoort" name="schildersoort" value="MurenBuitenSchilderen" onClick={stap4Uitvoeren}/>
                <label for="murenbuitenschilderencheckbox" id="murenbuitenschilderen"><Image src={Murenbuiten} alt="Muren buiten icoon"/>Muren Buiten</label>
              </li>
 
              <li>
                <input type="checkbox" id="plafondschilderencheckbox" class="schildersoort" name="schildersoort" value="PlafondSchilderen" onClick={stap4Uitvoeren}/>
                <label for="plafondschilderencheckbox" id="plafondschilderen"><Image src={Plafond} alt="Plafond icoon"/>Plafonds</label>
              </li>

              <li>
                <input type="checkbox" id="deurenschilderencheckbox" class="schildersoort" name="schildersoort" value="DeurenSchilderen" onClick={stap4Uitvoeren}/>
                <label for="deurenschilderencheckbox" id="deurenschilderen"><Image src={Deur} alt="Deur icoon"/>Deuren</label>
              </li>

              <li>
                <input type="checkbox" id="kozijnenschilderencheckbox" class="schildersoort" name="schildersoort" value="KozijnenSchilderen" onClick={stap4Uitvoeren}/>
                <label for="kozijnenschilderencheckbox" id="kozijnenschilderen"><Image src={Kozijn} alt="Kozijn icoon"/>Kozijnen</label>
              </li>

              <li>
                <input type="checkbox" id="overigehoutwerkschilderencheckbox" class="schildersoort" name="schildersoort" value="OverigeHoutwerkSchilderen" onClick={stap4Uitvoeren}/>
                <label for="overigehoutwerkschilderencheckbox" id="overigehoutwerkschilderen"><Image src={Houtwerk} alt="Houtwerk icoon"/>Overige Houtwerk</label>
              </li>
            </ul>

            <p className="offerteerror displaynone" id="stap3error">Kies minimaal 1 optie.</p>

            <button onClick={terugStap3}>Vorige stap</button>
            <button onClick={checkStap4}>Volgende stap</button>
          </section>




          <section id="offerstestap5" className="displaynone">
            <h2>5. Afronden</h2>
            <p>Voer uw gegevens in.</p>

            <ul>
              <li>
                <input type="text" placeholder="*Voornaam" id="voornaam" onChange={stap5Uitvoeren}></input>
              </li>
              <li>
                <input type="text" placeholder="*Achternaam" id="achternaam" onChange={stap5Uitvoeren}></input>
              </li>
              <li>
                <input type="text" placeholder="Bedrijfsnaam" id="bedrijfsnaam" onChange={stap5Uitvoeren}></input>
              </li>
              <li>
                <input type="email" placeholder="*E-Mail" id="email" onChange={stap5Uitvoeren}></input>
              </li>
              <li>
                <input type="text" placeholder="*Telefoonnummer" id="telefoonnummer" onChange={restrictToNumbers} onClick={stap5Uitvoeren}></input>
              </li>
              <li>
                <input type="text" placeholder="*Woonplaats" id="woonplaats" onChange={stap5Uitvoeren}></input>
              </li>
            </ul>
              
            <ul>
              <li>
                <p>*Wanneer moeten wij beginnen?</p>
                <select id="startdatum">
                  <option value="Zo snel mogelijk">Zo snel mogelijk</option>
                  <option value="Binnen 1 of 2 maandenn">Binnen 1 of 2 maanden</option>
                  <option value="Binnen 2 of 4 maanden">Binnen 2 of 4 maanden</option>
                  <option value="Langer dan 4 maanden">Langer dan 4 maanden</option>
                  <option value="Weet ik nog niet">Weet ik nog niet</option>
                </select>
              </li>
              <li>
                <p>Optoneel: Foto van uw woning</p>
                <span><input multiple="multiple" id="bestand" type="file" accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.pdf,application/pdf,.jpg,.jpeg,image/jpeg,.png,image/png,.gif,image/gif"/></span>
              </li>
              <li>
                <p>*Anti Spam</p>
                <input placeholder="Wat is 3 + 1?" type="text" id="antwoordform" onChange={restrictToNumbers} onClick={stap5Uitvoeren} />
              </li>
            </ul>

            <p className="offerteerror displaynone" id="stap5error" onChange={stap5Uitvoeren}>Controleer de verplichte velden en/of controleer het e-mailadres.</p>

            <button onClick={terugStap4}>Vorige stap</button>
            <button onClick={checkStap5}>Offerte Versturen</button>

          </section>


          <section id="loadingstate" className="displaynone">
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
          </section>

          <section id="successtate" className="displaynone">
            <span>
              <Image src={greenCheck} alt="Groene check icoon"/>
              <h2>Uw aanvraag is met succes ontvangen</h2>
            </span>
            <p>We streven ernaar om u zo snel mogelijk van een antwoord te voorzien. Bedankt voor uw geduld en begrip terwijl wij uw vraag in behandeling nemen.</p>  
          </section>




        </div>






        </div>
        <div></div>
      </div>
    </>
  );
}
