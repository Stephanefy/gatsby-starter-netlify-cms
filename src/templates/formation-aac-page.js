import React, {useState} from "react";
import Layout from '../components/Layout'
import {Steps} from "antd";
import { Carousel } from 'antd';
import { LikeFilled } from '@ant-design/icons';

import conduiteaccPdf from '../../static/pdf/conduite-accompagnee.pdf'
import { Document, Page, pdfjs  } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;




const {Step} = Steps;

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: ' #bd1a1a',
};
export const FormationB78PageTemplate = () => {

  const [numPages, setNumPages] = useState(2);
  const [pageNumber, setPageNumber] = useState(1);
  
  const goNextPage = () => {
      setPageNumber(prevPageNumber => prevPageNumber + 1)
  }
  const goPreviousPage = () => {
      setPageNumber(prevPageNumber => prevPageNumber - 1)
  }

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }



  const [current, setCurrent] = useState(0);

  const onChange = current => {
    setCurrent(current);
  };

  return (
    <>
    <div style={{marginTop: "6rem"}} className="columns">
      <section className="section">
        <div className="column is-10 is-offset-1">
          <h1 className="is-size-1 has-text-weight-semibold has-text-centered">
            La conduite accompagnée (AAC)
          </h1>
          <p
            className="column is-10 is-size-5 has-text-centered"
            style={{margin: "auto"}}
          >
          La conduite accompagnée permet aux jeunes d’acquérir davantage d’expérience avant l’examen du permis de conduire ou entre deux présentations à l’examen. C'est son principal avantage, mais pas le seul.
          </p>
        </div>
        <hr
          style={{
            width: "30%",
            margin: "5em auto",
            border: "2px solid #BD1A1A",
          }}
        />
        <div className="column is-10 is-offset-1 is-size-1">
          <Steps
            direction="vertical"
            size="large"
            current={current}
            onChange={onChange}
          >
            <Step
              title="A/ Présentation"
              description="Dès 15 ans vous pouvez apprendre à conduire un véhicule grâce à la conduite accompagnée (AAC). Après avoir obtenu votre code et effectué les 20 heures de conduite obligatoires, partez sur la route avec votre accompagnateur pour parfaire votre formation.
D’une durée de 1an, l’AAC vous permettra de parcourir au minimum 3000 km et d’acquérir toute l’expérience nécessaire dans le but de passer l’examen de conduite en toute sérénité, dès vos 17 ans et demi !"
            />
            <Step
              title="B/ Avantages"
              description="Outre l’apport non négligeable d’expérience pour l’élève suivant la formation AAC, la conduite accompagnée comporte son lot d’avantages :
- Taux de réussite à l’examen du permis plus élevé que les formations classiques
- Période probatoire de 2 ans contre 3 ans pour les formations classiques
- Assurance de la voiture plus faible durant la période probatoire"
            />
            <Step
              title="C/ Formation initiale"
              description="Avant de pouvoir bénéficier de la conduite accompagnée, le candidat doit tout d’abord passer par une phase de formation initiale auprès de l’Auto-Ecole. Celle-ci comprend en principe l’examen du Code mais cette obtention n’est pas nécessaire lorsque l’élève détient une catégorie de permis de conduire depuis cinq ans au plus. La formation initiale comprend également 20 heures de conduite effective sur la voie publique avec un moniteur. 
A l’issue de cette période, l’Auto-Ecole délivre à l’élève une attestation de fin de formation initiale. Un exemplaire de celle-ci doit être transmis à la société d’assurance."
            />
            <Step
              title="D/ Déroulement de la formation"
              description=" Un rendez-vous préalable d’une durée minimum de deux heures est fixé au candidat par l’Auto-Ecole. Il se déroule en présence d’au moins un accompagnateur et d’un moniteur.

Après ce premier rendez-vous, la période de conduite accompagnée doit durer au moins une année. Le candidat doit avoir parcouru au moins 3000 km en présence du ou des accompagnateurs mentionnés initialement. Le logo « conduite accompagnée » doit figurer à l’arrière du véhicule et le livret d’apprentissage délivré par l’Auto-Ecole doit y être conservé pour être présenté aux forces de l’ordre en cas de contrôle.
L’élève est libre de conduire où il le souhaite en France. En revanche, la circulation en conduite accompagnée à l’étranger est interdite.
Au cours de la période de conduite accompagnée, le candidat doit également participer à au moins deux rendez-vous pédagogiques d’une durée de trois heures chacun :

- Le premier a lieu entre 4 et 6 mois après la date de délivrance de l’attestation de fin de formation initiale ;
- Le second a lieu après que 3000 km ont été parcourus.

Une fois cette procédure accomplie et lorsque l’élève a atteint l’âge minimal de 17 ans et demi, l’Auto-Ecole peut alors le présenter à l’examen pratique."
            />
            <Step
              title="E/ Réussite à l’examen"
              description="Le déroulement de l’examen du permis est le même qu’en cas de formation classique. Cependant, après la réussite à l’examen, la période probatoire du permis est ici réduite de 3 ans à 2 ans. La surprime conducteur novice à verser à l’assureur est également réduite par rapport à la formule traditionnelle. Pendant les deux ans de permis probatoire, le jeune conducteur est tenu d’apposer le signe « A » à l’arrière de son véhicule. A défaut, il s’expose à une contravention."
            />
          </Steps>
        </div>
     
      </section>

    </div>
    <div className='columns is-centered'>
      <h3 className="is-size-3">Les avantages de la conduite accompagnée</h3>
    </div>
  
    <Carousel effect="scrollx" autoplay>
        <div>
          <h3 style={contentStyle} className="is-size-4"> <span><LikeFilled /></span> Possible dès l'âge de 15 ans</h3>
        </div>
        <div>
          <h3 style={contentStyle} className="is-size-4"> <span><LikeFilled /></span> 2 ans de disque A</h3>
        </div>
        <div>
          <h3 style={contentStyle} className="is-size-4"> <span><LikeFilled /></span> Améliorer la sécurité routière chez les jeunes de 18 à 25 ans</h3>
        </div>
        <div>
          <h3 style={contentStyle} className="is-size-4"> <span><LikeFilled /></span> Examen pratique du permis de conduire dès 17 ans</h3>
        </div>
        <div>
          <h3 style={contentStyle} className="is-size-4"> <span><LikeFilled /></span> 80% de reçus à la première présentation</h3>
        </div>
        <div>
          <h3 style={contentStyle} className="is-size-4"> <span><LikeFilled /></span> Peut diminuer le coût de l'assurance</h3>
        </div>
      </Carousel>
      <div className="columns is-centered my-6">
  
          <Document
            file={conduiteaccPdf}
            className="card"
          >

            <Page pageNumber={pageNumber} />
          <div className="columns is-centered my-4">
          {pageNumber > 1 &&
            <button onClick={goPreviousPage} className="button is-info mx-2">
            page précédente
          </button>
          }
          {
            pageNumber < numPages && 
              <button onClick={goNextPage} className="button is-info">
                page suivante
                </button>
          }

          
          </div> 
          <div className="columns is-centered my-2">
          <p>Page {pageNumber} / {numPages}</p>
          </div>
          
          </Document>
 
      </div>
    </>
  );
};

const FormationB78Page = () => {
  return (
    <Layout>
      <FormationB78PageTemplate />
    </Layout>
  );
};

export default FormationB78Page;
