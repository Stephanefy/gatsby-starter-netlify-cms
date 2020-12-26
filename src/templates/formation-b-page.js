import React, {useState} from "react";
import Layout from "../components/Layout";

import {Link, graphql} from "gatsby";
import {Steps, Result} from "antd";

import examenPermisConduirePdf from "../../static/pdf/examen-permis-de-conduire.pdf";
import {Document, Page, pdfjs} from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const {Step} = Steps;
export const FormationBPageTemplate = () => {
  const [numPages, setNumPages] = useState(2);
  const [pageNumber, setPageNumber] = useState(1);

  const goNextPage = () => {
    setPageNumber(prevPageNumber => prevPageNumber + 1);
  };
  const goPreviousPage = () => {
    setPageNumber(prevPageNumber => prevPageNumber - 1);
  };

  function onDocumentLoadSuccess({numPages}) {
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
              Formations B
            </h1>
            <p
              className="column is-10 is-size-6 has-text-left"
              style={{margin: "auto"}}
            >
              Le résultat de l’évaluation sera une note ou une lettre, qui nous
              permettra de déterminer, selon une grille pré-établi, un volume de
              formation prévisionnel : 
              <p>Nous pourrons alors vous proposer un
              parcours de formation adapté, personnalisé et accompagné d’une
              proposition détaillée et chiffrée.
              </p>
              <p>
              Nous proposons systématiquement
              à nos élèves toutes les filières de formation possibles
              (Apprentissage Anticipé de la Conduite, Conduite Supervisée, B
              traditionnel, Boite Automatique) et procédons à un conseil
              personnalisé en tenant compte des capacités et motivations de
              chacun dans le choix de leur mode d’apprentissage.
              </p>
              A la suite de
              cette évaluation, une pochette pédagogique contenant les
              différents documents administratifs, contractuels et informatifs
              sera remise à la signature du contrat, sans oublier, le cas
              échéant, les différents supports pédagogiques (livre de code,
              fiche des vérifications, livret d’apprentissage etc.).
            </p>
          </div>
          <hr
            style={{
              width: "30%",
              margin: "5em auto",
              height: "5px",
              backgroundColor: "#BD1A1A",
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
                title="I/ évaluation de départ"
                description="Cela permettra de déterminer un volume d'heures approximatifs à faire avant le passage du permis.
Cette heure d'évaluation est une prise de contact entre l'élève et l'enseignement."
              />
              <Step
                title="II/ Apprentissage"
                description="Après l'évaluation, vous pourrez enfin commencer votre formation sur le véhicule. Des cours théoriques et pratiques, collectifs ou individuels, vous aideront à atteindre les objectifs définis et à personnaliser votre progression. Vôtre enseignant sera à vos côtés pour vous aider et vous conseiller.
Le livret d'apprentissage qui est mis à votre disposition est obligatoire pendant les heures de conduites. Ce livret va vous guider dans votre parcours. Ce qui vous permettra de savoir 'où vous en êtes' mais surtout 'où vous allez'"
              />
              <Step
                title="III/ Examen du permis de conduire"
                description="Lorsque vous aurez acquis toute les compétences nécessaires et fondamentales, votre enseignant pourra alors vous proposer de passer l'examen du permis de conduire .

L'épreuve est évaluée par un expert de la conduite et de la sécurité routière.

L'évaluation réalisée par l'expert est basé sur les textes réglementaires et instructions précises qui en fixent les modalités.

Il réalise ainsi un inventaire des points positifs et négatifs qui seront par la suite retranscrit de façon formelle dans une grille d'évaluation

Votre résultat ne sera disponible que 48 heures après le passage de l'examen (week-end et jours fériés non inclus.)"
              />
            </Steps>
          </div>
          <div className="columns is-centered">
            <div className="column is-3">
              <Result
                status="success"
                title="Vous êtes reçu"
                subTitle="La mention 'FAVORABLE' est indiquée en bas du Certificat d'examen du permis de conduire (CEPC)"
              />
            </div>
            <div className="column is-3">
              <Result
                status="error"
                title="Vous n'êtes pas reçu"
                subTitle="La mention 'INSUFFISANT' est indiquée en bas de votre bilan de compétences. Les raisons de l’échec et des pistes d’amélioration sont indiquées dans le document."
              />
            </div>
          </div>
        </section>
      </div>
      <div className="columns is-centered my-6">
        <Document file={examenPermisConduirePdf} className="card">
          <Page pageNumber={pageNumber} />
          <div className="columns is-centered my-4">
            {pageNumber > 1 && (
              <button onClick={goPreviousPage} className="button is-info mx-2">
                page précédente
              </button>
            )}
            {pageNumber < numPages && (
              <button onClick={goNextPage} className="button is-info">
                page suivante
              </button>
            )}
          </div>
          <div className="columns is-centered my-2">
            <p>
              Page {pageNumber} / {numPages}
            </p>
          </div>
        </Document>
      </div>
    </>
  );
};

const FormationBPage = () => {
  return (
    <Layout>
      <FormationBPageTemplate />
    </Layout>
  );
};

export default FormationBPage;
