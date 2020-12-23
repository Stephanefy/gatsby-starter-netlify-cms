import React, {useState} from "react";
import {Link, graphql} from "gatsby";
import {Steps} from "antd";

import Layout from '../components/Layout'

const {Step} = Steps;
export const FormationCourSuperviseTemplate = () => {
  const [current, setCurrent] = useState(0);

  const onChange = current => {
    setCurrent(current);
  };

  return (
    <div style={{marginTop: "6rem"}} className="columns">
      <section className="section">
        <div className="column is-10 is-offset-1">
          <h1 className="is-size-1 has-text-weight-semibold has-text-centered">
            La conduite supervisée (CS)
          </h1>
          <p
            className="column is-10 is-size-6 has-text-centered"
            style={{margin: "auto"}}
          >
      Un candidat souhaitant conduire avec un proche sans suivre un apprentissage anticipé de la conduite peut solliciter une inscription en conduite supervisée. Dans ce cas, l’âge minimum pour passer le code de la route est de 17 ans, comme pour tout candidat classique. Le candidat doit également suivre une formation en conduite avec un enseignant avant d’obtenir l’autorisation de conduire avec son accompagnateur.
          </p>
        </div>
        <hr style={{ width: "30%", margin: '5em auto', height: '5px', backgroundColor:'#BD1A1A'}}/>
        <div className="column is-10 is-offset-1 is-size-1">
          <Steps
            direction="vertical"
            size="large"
            current={current}
            onChange={onChange}
          >
            <Step
              title="A/ Pour s'inscrire à la conduite supervisée il faut :"
              description="• avoir 18 ans ou plus ;
• avoir l'accord de l'assureur du véhicule."
            />
            <Step
              title="B/ Quelles sont les conditions d’accès ?"
              description={<div>
                    <p>On peut choisir la conduite supervisée :</p>
                    <ul>
                        <li>• soit au moment de l’inscription à l’auto-école</li>
                        <li>• soit après un échec à l'épreuve pratique</li>
                    </ul>
                    <p>
                    Pour y accéder, il faut :
                        <ul>
                            <li>• avoir réussi le code de la route</li>
                            <li>• avoir suivi une formation pratique avec un enseignant de l’école de conduite (20 heures minimum)</li>
                            <li>• avoir bénéficié d’une évaluation favorable de la part de son enseignant de la conduite et de la sécurité routière.</li>
                        </ul>
                    </p>
              </div>}                     
            />
            <Step
              title="C/ Après la phase de formation initiale, le candidat doit :"
              description={<div>
                  <ul>
                      <li>*Avoir obtenu un accord préalable écrit de la société d’assurances sur l’extension de garantie nécessaire pour la conduite du ou des véhicules utilisé(s) au cours de la future phase de conduite supervisée. Cet accord précise le ou les noms des accompagnateurs autorisés par la société d'assurances à avoir cette fonction. Il est joint au contrat de formation de l'élève, qui précise les obligations relatives à la fonction d'accompagnateur et les conditions spécifiques à la conduite supervisée, ou à l'avenant au contrat de formation, si le choix de la conduite supervisée a été décidé après la conclusion du contrat.</li>
                      <li>*Avoir obtenu l'attestation de fin de formation initiale (AFFI). Un exemplaire est transmis à la société d'assurances par le souscripteur du contrat de formation.</li>
                      <br/>
                      <p>Après un échec à l'épreuve pratique de l'examen du permis de conduire, le candidat doit :</p>
                      
                      <li>*Avoir obtenu un accord préalable écrit de la société d'assurances.</li>
                      <li>*Avoir obtenu une autorisation de conduire en conduite supervisée. Un exemplaire est transmis, dès sa délivrance, à la société d'assurances par le souscripteur du contrat de formation</li>
                  </ul>
              </div>
                  
              }
            />
            <Step
              title="D/ Quels sont les avantages de la conduite supervisée ?"
              description={<div>
                    <p>"La conduite supervisée permet :
                    <ul>
                        <li>*D’acquérir de l’expérience de conduite à moindre coût pour compléter sa formation initiale et, en cas d’échec à l’examen pratique, d’améliorer ses acquis en attendant de le repasser</li>
                        <li>*D’augmenter sensiblement ses chances de réussite à l’examen du permis de conduire : 74% de chances de l’obtenir dès la première fois contre 55% par la voie de l’apprentissage traditionnel</li>
                    </ul>
                    </p>
              </div>}
            />
            <Step
              title="E/ Qui peut être accompagnateur ?"
              description="L'accompagnateur doit:
• être titulaire du permis B (permis automobile) depuis au moins cinq ans sans interruption;
• avoir obtenu l'accord de son assureur;
• être mentionné dans le contrat signé avec l'école de conduite.

Il est possible d'avoir plusieurs accompagnateurs, également hors du cadre familial."
            />
          </Steps>
          
        </div>
      </section>
    </div>
  );
};

const FormationSupervisePage = () => {
  return (
    <Layout>
      <FormationCourSuperviseTemplate />
    </Layout>
  );
};

export default FormationSupervisePage;
