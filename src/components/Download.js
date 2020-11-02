import React from 'react';
import { useStaticQuery, graphql } from "gatsby";



const Download = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            file(name: {eq: "réglement-intérieur-auto-école-stClotilde"}) {
                id
                publicURL
                name
            }
        }
    `)

    return (
        <div className="column is-12 has-text-centered">
            <a href={data.file.publicURL} download className="btn">Télécharger le réglement intérieur</a>
        </div>
        
    )
}




export default Download;