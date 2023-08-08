import React from 'react';
import showdown from 'showdown';

const Home = ({ text, title }) => {
  const converter = new showdown.Converter();
  const htmlText = converter.makeHtml(text);
  const htmlTitle = converter.makeHtml(title);


  return (
    <section className='flex flex-col justify-center items-center'>
      <div dangerouslySetInnerHTML={{ __html: htmlTitle }} />
      <div dangerouslySetInnerHTML={{ __html: htmlText }} />
    </section>
  );
}

export default Home;