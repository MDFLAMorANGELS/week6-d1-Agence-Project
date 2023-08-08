import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import showdown from 'showdown';

const Works = () => {
  const text = `### Au fil des années, nous avons pu accompagner les meilleurs.

  Découvrez pas à pas comment nous avons été présents pour lancer vos marques préférées.`
  const converter = new showdown.Converter();
  const htmltext = converter.makeHtml(text);


  return (
    <section className=''>
      <div className='text-left' dangerouslySetInnerHTML={{ __html: htmltext }} />
      <nav className='my-10'>
        <Link
        className='font-semibold text-xl mx-3'
        to="/works/platon"
        >
          Platon
        </Link>
        <Link
        className='font-semibold text-xl mx-5'
        to="/works/solane"
        >
          Solane
        </Link>
        <Link
        className='font-semibold text-xl mx-3'
        to="/works/sedal"
        >
          Sedal
        </Link>
      </nav>
      <Outlet/>

    </section>
  );
}

export default Works;