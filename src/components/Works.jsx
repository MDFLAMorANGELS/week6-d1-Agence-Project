import React from 'react';
import showdown from 'showdown';

const Works = ({ text, title }) => {
  const converter = new showdown.Converter();
  const htmlText = converter.makeHtml(text);
  const htmlTitle = converter.makeHtml(title);


  return (
    <section className=''>
      <div dangerouslySetInnerHTML={{ __html: htmlTitle }} />
      <div dangerouslySetInnerHTML={{ __html: htmlText }} />
    </section>
  );
}

export default Works;