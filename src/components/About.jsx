import React from 'react';
import showdown from 'showdown';

const About = () => {
  const text = `### Websitic est une Agence de communication digitale à paris ayant pour mission de vous accompagner sur vos projets digitaux.

  De l’étape d’avant projet web au lancement effectif du site, nous sommes là pour vous. Tout au long de la durée de vie de nos projets communs, nous mettons tout en oeuvre pour vous proposer des stratégies digitales efficaces et vous permettre d’atteindre vos objectifs.  
  Laissez votre projet entre des mains dignes de confiance, ayant accompagné "PLATON", "TCar", "Solane" ou encore "Sedal" vers le sommet.`
  const converter = new showdown.Converter();
  const htmlText = converter.makeHtml(text);


  return (
    <section className=''>
      <div className='text-left' dangerouslySetInnerHTML={{ __html: htmlText }} />
    </section>
  );
}

export default About;