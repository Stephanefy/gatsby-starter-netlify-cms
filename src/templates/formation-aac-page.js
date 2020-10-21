import React, {useState} from "react";
import {Link, graphql} from "gatsby";
import {Steps} from "antd";

import Layout from "../components/Layout";

const {Step} = Steps;
export const FormationB78PageTemplate = () => {
  const [current, setCurrent] = useState(0);

  const onChange = current => {
    setCurrent(current);
  };

  return (
    <div style={{marginTop: "6rem"}} className="columns">
      <section className="section">
        <div className="column is-10 is-offset-1">
          <h1 className="is-size-1 has-text-weight-semibold has-text-centered">
            La conduite accompagnée (AAC)
          </h1>
          <p
            className="column is-10 is-size-6 has-text-centered"
            style={{margin: "auto"}}
          >
            Cette formation à pour but de mettre en confiance l'élève venant de
            voiture embrayage automatique su une voiture avec embrayage manuel.
            Cette formation doit se faire sur une voiture manuelle avec un
            moniteur diplômé de l'autorisation d'enseigner. Le déroulement des
            séances se fait sur une durée de 7 heures et se décompose de
            plusieurs exercices.
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

          <p className="is-size-6">
            A la suite de cette formation, l'auto-école fera un bilan pour
            savoir vos ressentis, vos impressions et si vous vous sentez en
            sécurité pour valider cette formation car aucun examen final ne sera
            fait par un inspecteur du permis de conduire. Nous nous verrons
            ensuite envoyer les documents pour la fabrication de votre future
            catégorie de permis pour ANTS qui vous mettra en la possession du
            nouveau titre permis B valider par nos soins.
          </p>
        </div>
        <div className="column is-10 is-offset-1">
          <h1 className="is-size-1 has-text-weight-semibold has-text-centered">
            La conduite supervisée (CS)
          </h1>
          <p
            className="column is-10 is-size-6 has-text-centered"
            style={{margin: "auto"}}
          >
            Cette formation à pour but de mettre en confiance l'élève venant de
            voiture embrayage automatique su une voiture avec embrayage manuel.
            Cette formation doit se faire sur une voiture manuelle avec un
            moniteur diplômé de l'autorisation d'enseigner. Le déroulement des
            séances se fait sur une durée de 7 heures et se décompose de
            plusieurs exercices.
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

const FormationB78Page = () => {
  return (
    <Layout>
      <FormationB78PageTemplate />
    </Layout>
  );
};

export default FormationB78Page;
