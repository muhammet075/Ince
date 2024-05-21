import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/offerte.module.css";

export default function Offerte() {

  useEffect(() => {
  });


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
    }
  }

  function terugStap1(){
    document.querySelector("#stap2").classList.remove("activestap");
    document.querySelector("#stap1").classList.add("activestap");
    document.querySelector("#offerstestap2").classList.add("displaynone");
    document.querySelector("#offerstestap1").classList.remove("displaynone");
  }










  function stap3Uitvoeren(){
    const behangklaarcheckbox = document.querySelector("#behangklaarcheckbox");
    const schilderklaarcheckbox = document.querySelector("#schilderklaarcheckbox");
    const spachtelputzcheckbox = document.querySelector("#spachtelputzcheckbox");
    
    document.querySelector("#stap3error").classList.add("displaynone");

    let gekozenOpties = [];
    
    if (behangklaarcheckbox.checked) {
      gekozenOpties.push("Behangklaar Stucen");
    }
    if (schilderklaarcheckbox.checked) {
      gekozenOpties.push("Schilderklaar Stucen");
    }
    if (spachtelputzcheckbox.checked) {
      gekozenOpties.push("Spachtelputz Stucen");
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
    }
  }

  function terugStap2(){
    document.querySelector("#stap3").classList.remove("activestap");
    document.querySelector("#stap2").classList.add("activestap");
    document.querySelector("#offerstestap3").classList.add("displaynone");
    document.querySelector("#offerstestap2").classList.remove("displaynone");
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

  }


  function terugStap3(){
    document.querySelector("#stap4").classList.remove("activestap");
    document.querySelector("#stap3").classList.add("activestap");
    document.querySelector("#offerstestap4").classList.add("displaynone");
    document.querySelector("#offerstestap3").classList.remove("displaynone");
  }















  function stap5Uitvoeren(){
  }

  function checkStap5(){

  }


  function terugStap4(){
    document.querySelector("#stap5").classList.remove("activestap");
    document.querySelector("#stap4").classList.add("activestap");
    document.querySelector("#offerstestap5").classList.add("displaynone");
    document.querySelector("#offerstestap4").classList.remove("displaynone");
  }







  return (
    <>
      <Head>
          <title>Stukadoorsbedrijf Ince - Offerte</title>
          <meta name="description" content=""/>
          <meta name="og:description" content=""/>
          <meta name="keywords" content=""/>
          <meta property="og:url" content=""/>
          <meta property="og:title" content=""/>
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

      <div className={styles.offerte}>
        <div>

        <div>
          <ul>
            <li id="stap1" className="activestap">
              <p>1</p>
              <p>Kies uw huistype</p>
            </li>
            <li id="stap2">
              <p>2</p>
              <p>Wat moeten wij stucen?</p>
            </li>
            <li id="stap3">
              <p>3</p>
              <p>Hoe moeten wij het stucen?</p>
            </li>
            <li id="stap4">
              <p>4</p>
              <p>Schilder Werkzaamheden</p>
            </li>
            <li id="stap5">
              <p>5</p>
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
                <label for="nieuwbouwwoningradio" id="nieuwbouwwoning">Nieuwbouw</label>
              </li>
              <li>
                <input type="radio" id="renovatiewoningradio" class="woningsoort" name="woningsoort" value="Renovatiewoning" onClick={stap1Uitvoeren}/>
                <label for="renovatiewoningradio" id="renovatiewoning">Renovatie</label>
              </li>
           </ul>

           <p className="offerteerror displaynone" id="stap1error">Kies eerst je type woning.</p>

            <button className="displaynone"></button>
            <button onClick={checkStap1}>Volgende stap</button>
          </section>



          <section id="offerstestap2" className="displaynone">
            <h2>2. Wat moeten wij stucen?</h2>
            <p>Meerdere keuzes mogelijk.</p>

            <ul>
              <li>
                <input type="checkbox" id="muurbuitencheckbox" class="muursoort" name="muursoort" value="MurenBuiten" onClick={stap2Uitvoeren}/>
                <label for="muurbuitencheckbox" id="muurbuiten">Muren Buiten</label>
              </li>
              <li>
                <input type="checkbox" id="muurbinnencheckbox" class="muursoort" name="muursoort" value="MurenBinnen" onClick={stap2Uitvoeren}/>
                <label for="muurbinnencheckbox" id="muurbinnen">Muren Binnen</label>
              </li>

              <li>
                <input type="checkbox" id="plafondscheckbox" class="muursoort" name="muursoort" value="Plafonds" onClick={stap2Uitvoeren}/>
                <label for="plafondscheckbox" id="plafonds">Plafonds</label>
              </li>
           </ul>

           <p className="offerteerror displaynone" id="stap2error">Kies minimaal 1 optie.</p>

            <button onClick={terugStap1}>Vorige stap</button>
            <button onClick={checkStap2}>Volgende stap</button>
          </section>



          <section id="offerstestap3" className="displaynone">
            <h2>3. Hoe moeten wij het stucen?</h2>
            <p>Meerdere keuzes mogelijk.</p>

            <ul>
              <li>
                <input type="checkbox" id="behangklaarcheckbox" class="stucsoort" name="stucsoort" value="BehangklaarStucen" onClick={stap3Uitvoeren}/>
                <label for="behangklaarcheckbox" id="behangklaar">Behangklaar Stucen</label>
              </li>

              <li>
                <input type="checkbox" id="schilderklaarcheckbox" class="stucsoort" name="stucsoort" value="SchilderklaarStucen" onClick={stap3Uitvoeren}/>
                <label for="schilderklaarcheckbox" id="schilderklaar">Schilderklaar Stucen</label>
              </li>
              <li>
                <input type="checkbox" id="spachtelputzcheckbox" class="stucsoort" name="stucsoort" value="Spachtelputz Stucen" onClick={stap3Uitvoeren}/>
                <label for="spachtelputzcheckbox" id="spachtelputz">Spachtelputz (Fijne Korrel) Stucen</label>
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
                <label for="murenbinnenschilderencheckbox" id="murenbinnenschilderen">Muren Binnen</label>
              </li>

              <li>
                <input type="checkbox" id="murenbuitenschilderencheckbox" class="schildersoort" name="schildersoort" value="MurenBuitenSchilderen" onClick={stap4Uitvoeren}/>
                <label for="murenbuitenschilderencheckbox" id="murenbuitenschilderen">Muren Buiten</label>
              </li>
 
              <li>
                <input type="checkbox" id="plafondschilderencheckbox" class="schildersoort" name="schildersoort" value="PlafondSchilderen" onClick={stap4Uitvoeren}/>
                <label for="plafondschilderencheckbox" id="plafondschilderen">Plafonds</label>
              </li>

              <li>
                <input type="checkbox" id="deurenschilderencheckbox" class="schildersoort" name="schildersoort" value="DeurenSchilderen" onClick={stap4Uitvoeren}/>
                <label for="deurenschilderencheckbox" id="deurenschilderen">Deuren</label>
              </li>

              <li>
                <input type="checkbox" id="kozijnenschilderencheckbox" class="schildersoort" name="schildersoort" value="KozijnenSchilderen" onClick={stap4Uitvoeren}/>
                <label for="kozijnenschilderencheckbox" id="kozijnenschilderen">Kozijnen</label>
              </li>

              <li>
                <input type="checkbox" id="overigehoutwerkschilderencheckbox" class="schildersoort" name="schildersoort" value="OverigeHoutwerkSchilderen" onClick={stap4Uitvoeren}/>
                <label for="overigehoutwerkschilderencheckbox" id="overigehoutwerkschilderen">Overige Houtwerk</label>
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
                <input type="text" placeholder="*Voornaam"></input>
              </li>
              <li>
                <input type="text" placeholder="*Achternaam"></input>
              </li>
              <li>
                <input type="text" placeholder="Bedrijfsnaam"></input>
              </li>
              <li>
                <input type="email" placeholder="*E-Mail"></input>
              </li>
              <li>
                <input type="text" placeholder="*Telefoonnummer"></input>
              </li>
              <li>
                <input type="text" placeholder="*Woonplaats"></input>
              </li>
            </ul>
              
            <ul>
              <li>
                <p>*Wanneer moeten wij beginnen?</p>
                <select required="required" class="form-select">
                  <option disabled="disabled" value="Selecteer een optie">Selecteer een optie</option>
                  <option value="Zo snel mogelijk">Zo snel mogelijk</option>
                  <option value="Binnen 1 of 2 maandenn">Binnen 1 of 2 maanden</option>
                  <option value="Binnen 2 of 4 maanden">Binnen 2 of 4 maanden</option>
                  <option value="Langer dan 4 maanden">Langer dan 4 maanden</option>
                  <option value="Weet ik nog niet">Weet ik nog niet</option></select>
              </li>
              <li>
                <p>*Wanneer moeten wij beginnen?</p>
                <span><input type="file"/></span>
              </li>
            </ul>


            <button onClick={terugStap4}>Vorige stap</button>
            <button onClick={checkStap5}>Volgende stap</button>
          </section>




        </div>






        </div>
        <div></div>
      </div>
    </>
  );
}
