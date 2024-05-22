import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/meestgesteldevragen.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Meestgesteldevragen(props) {

    function toggleAccordion(e) {
        const faqAnswer = e.currentTarget.nextElementSibling;
        const arrow = e.currentTarget.querySelector('span:first-child');
            if (!faqAnswer) {
            return;
        }
    
        const isOpen = faqAnswer.classList.contains("opencollapse");
        const allAnswers = document.querySelectorAll(".opencollapse");
        const allButtons = document.querySelectorAll(".goldbtn");
        const allArrows = document.querySelectorAll(".goldarrow");
    
        allAnswers.forEach((answer) => {
            answer.classList.add("removecollapse");
            answer.classList.remove("opencollapse");
        });
    
        allButtons.forEach((button) => {
            button.classList.remove("goldbtn");
        });
    
        allArrows.forEach((a) => {
            a.classList.remove("goldarrow");
            a.classList.remove("rotatearrow");
            a.classList.remove("rotatearrowback");
        });
    
        if (!isOpen) {
            e.currentTarget.classList.add("goldbtn");
            arrow.classList.add("goldarrow", "rotatearrow");
    
            faqAnswer.classList.remove("removecollapse");
            faqAnswer.classList.add("opencollapse");
        } else {
            e.currentTarget.classList.remove("goldbtn");
            arrow.classList.remove("goldarrow", "rotatearrow");
            arrow.classList.add("rotatearrowback");
    
            faqAnswer.classList.add("removecollapse");
            faqAnswer.classList.remove("opencollapse");
        }
    }
    

    useEffect(() => {
        Aos.init();
    }, []);

    
  return (
    <>
        <div className={`${styles.meestgesteldevragen} ${props.className}`}>
            <div>
                <h2 id="faq1">Veelgestelde vragen over stucwerk</h2>
                                
                <div>
                    <section>
                    <button onClick={toggleAccordion}><span></span> <span id="faq2">Hoe lang duurt het gemiddeld om een kamer te stucen?</span></button>
                    <div className="accordion">
                        <p id="faq3">De duur van het stucwerk hangt af van verschillende factoren, waaronder de grootte van de kamer, de staat van de ondergrond en het type stucwerk dat wordt aangebracht. Over het algemeen kan een standaardkamer binnen één tot enkele dagen worden gestuct.</p>
                    </div>
                    </section>

                    <section>
                    <button onClick={toggleAccordion}><span></span> <span id="faq4">Welk type stucwerk is het meest geschikt voor vochtige ruimtes zoals badkamers?</span></button>
                    <div className="accordion">
                        <p id="faq5">Voor vochtige ruimtes zoals badkamers is het belangrijk om een stucwerk te gebruiken dat bestand is tegen vocht en schimmel. Een geschikte optie hiervoor is Aquastuc, een waterafstotend stucwerk dat speciaal is ontwikkeld voor gebruik in natte ruimtes.</p>
                    </div>
                    </section>

                    <section>
                    <button onClick={toggleAccordion}><span></span> <span id="faq6">Wat zijn de voordelen van spachtelputz ten opzichte van andere stucwerkafwerkingen?</span></button>
                    <div className="accordion">
                        <p id="faq7">Spachtelputz staat bekend om zijn duurzaamheid en veelzijdigheid. Het biedt een sterke en slijtvaste afwerking die geschikt is voor zowel binnen- als buitentoepassingen. Bovendien is spachtelputz verkrijgbaar in verschillende korrelgroottes en kleuren, waardoor het een populaire keuze is voor het creëren van diverse texturen en designs.</p>
                    </div>
                    </section>

                    <section>
                    <button onClick={toggleAccordion}><span></span> <span id="faq8">Hoe kan ik beschadigd stucwerk repareren?</span></button>
                    <div className="accordion">
                        <p id="faq9">Het repareren van beschadigd stucwerk vereist enige expertise en ervaring. Afhankelijk van de aard en omvang van de schade kunnen verschillende technieken worden toegepast, zoals het opvullen van scheuren, het aanbrengen van een nieuwe stuclaag, of het herstellen van beschadigde pleisterwerk.</p>
                    </div>
                    </section>

                    <section>
                    <button onClick={toggleAccordion}><span></span> <span id="faq10">Is het mogelijk om stucwerk zelf aan te brengen, of is professionele hulp vereist?</span></button>
                    <div className="accordion">
                        <p id="faq11">Hoewel het mogelijk is om zelf stucwerk aan te brengen, kan het een uitdagende en arbeidsintensieve taak zijn, vooral voor onervaren doe-het-zelvers. Professionele stukadoors beschikken over de juiste kennis, vaardigheden en gereedschappen om het stucwerk snel en nauwkeurig aan te brengen, met een professioneel resultaat als gevolg.</p>
                    </div>
                    </section>

                    <section>
                    <button onClick={toggleAccordion}><span></span> <span id="faq12">Welke voorbereidingen moet ik treffen voordat ik mijn muren laat stucen?</span></button>
                    <div className="accordion">
                        <p id="faq13">Voordat het stucwerk kan worden aangebracht, is het belangrijk om de muren goed voor te bereiden. Dit omvat het reinigen en egaliseren van de ondergrond, het repareren van eventuele beschadigingen en het aanbrengen van een primer om de hechting van het stucwerk te verbeteren.</p>
                    </div>
                    </section>

                    <section>
                    <button onClick={toggleAccordion}><span></span> <span id="faq14">Hoe kan ik bepalen welk type stucwerk het beste bij mijn interieur past?</span></button>
                    <div className="accordion">
                        <p id="faq15">Het kiezen van het juiste type stucwerk hangt af van verschillende factoren, waaronder uw persoonlijke voorkeuren, de stijl van uw interieur en de gewenste uitstraling. Een ervaren stukadoor kan u adviseren over de verschillende opties en helpen bij het kiezen van het stucwerk dat het beste bij uw wensen en behoeften past.</p>
                    </div>
                    </section>
                </div>

                <section>
                    <p id="faqlastcontent">Heeft u nog meer vragen?</p>
                    <Link href="/contact">Neem contact met ons op</Link>
                </section>
            </div>
        </div>
    </>
  );
}

export default Meestgesteldevragen;