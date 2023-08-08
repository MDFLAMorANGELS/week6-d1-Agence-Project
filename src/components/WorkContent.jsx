import React from 'react';
import { useParams } from 'react-router-dom';
import Showdown from 'showdown';

const converter = new Showdown.Converter();

function WorkContent() {
    const param = useParams();

    let text = '';

    if (param.id === 'platon') {
        text = `## Le challenge

Platon a décidé de se lancer à l'époque malgré une crise économique difficile.  
Nous avons été derrière eux pour leur apporter le meilleur du Web et du digital. Nous sommes vraiment la meilleure agence.`
    } else if (param.id === 'solane') {
        text = `## Solane est le premier vendeur de fraises du Poitou-Charentes

Et c'est grâce à nous. Dans les moments les meilleurs comme les plus durs, nos campagnes de communication sur la place du marché ont fonctionné.`;
    } else if (param.id === 'sedal') {
        text = `## Sedal, l'entreprise qui a commencé tout en bas... Et qui est toujours tout en bas

Malgré nos conseils et notre site web créé sur Wix, Sedal semble ne pas vouloir décoller. Mais comme un grand homme et une grande femme l'ont dit, "les derniers seront les premiers".`;
    } else {
        text = 'Contenu Markdown Inconnu';
    }

    const htmlText = converter.makeHtml(text);

    return (
        <>
            <h2>{param.id.toUpperCase()} : </h2>
            <div className='text-left' dangerouslySetInnerHTML={{ __html: htmlText }} />
        </>
    );
}

export default WorkContent;