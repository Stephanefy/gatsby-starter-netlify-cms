import React, {useState} from 'react'
import { Steps } from 'antd';
import { Helmet } from 'react-helmet'; 



import Layout from '../components/Layout'
import Separator from '../components/Separator';

const { Step } = Steps;
export const FormationB78PageTemplate = () => {

    const [current, setCurrent] = useState(0);


    const onChange = (current) => {
        setCurrent(current)
    }
    
    return (
    <div style={{ marginTop: '6rem'}} className="columns">
    <section className="section">
    <Helmet title={`Formation boîte automatique - Auto-école Sainte-Clotilde`}/>
    <div className="column is-10 is-offset-1">
    <h1 className="is-size-1 has-text-weight-semibold has-text-centered">
            Formations B78
        </h1>
        <p className="column is-10 is-size-6 has-text-centered has-text-left" style={{margin: 'auto'}}>
        Cette formation à pour but de mettre en confiance l'élève venant de voiture embrayage automatique su une voiture avec embrayage manuel.
        <p/>
        <p>
        Cette formation doit se faire sur une voiture manuelle avec un moniteur diplômé de l'autorisation d'enseigner.
        </p>
        <p>
        Le déroulement des séances se fait sur une durée de 7 heures et se décompose de plusieurs exercices.
        Cette formation est est possible trois mois après l'obtention préalable du permis boîte automatique.
        </p>

        </p>
        <div className="has-text-centered">
            <Separator />
          </div>    
          </div>
    <div className="column is-10 is-offset-1 is-size-1">
            <Steps direction="vertical" size="large" current={current} onChange={onChange}>
                <Step title="Comprendre et savoir utiliser le point de patinage de l'embrayage;" description="" />
                <Step title="Savoir réaliser un démarrage en cote;" description="" />
                <Step title="Adopter les techniques de l'éco-conduite" description="" />
                <Step title="Savoir adapter les vitesses aux conditions de circulation et à l'environnement" description="" />
            </Steps>
       
        <p className="is-size-6">
            A la suite de cette formation, l'auto-école fera un bilan pour savoir vos ressentis, vos impressions et si vous vous sentez en sécurité pour valider cette formation car aucun examen final ne sera fait par un inspecteur du permis de conduire.
            Nous nous verrons ensuite envoyer les documents pour la fabrication de votre future catégorie de permis pour ANTS qui vous mettra en la possession du nouveau titre permis B valider par nos soins.
            </p>
            </div>    

    </section>

    
    </div>
)}



const FormationB78Page = () => {
    
    return(
        <Layout>
                <FormationB78PageTemplate/> 
        </Layout>
    )
}


export default FormationB78Page;