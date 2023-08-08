import React from 'react';
import showdown from 'showdown';

const Home = () => {
  const text= `### Confiez vos rêves à des experts du Web

  Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO.  
  Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale.`
  const converter = new showdown.Converter();
  const htmlText = converter.makeHtml(text);


  return (
    <section className=''>
      <div className='text-left' dangerouslySetInnerHTML={{ __html: htmlText }} />
    </section>
  );
}

export default Home;