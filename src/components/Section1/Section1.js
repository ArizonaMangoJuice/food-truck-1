const Section1 = () => {
  return (
    <section className="section">
      <section className="section-left relative">
        <section className="background-object"></section>
        <h1 className="section-title">
          Eu et voluptate exercitation cupidatat enim duis do sit ad mollit
          tempor dolor nostrud.
        </h1>
        <p className="section-p">
          Magna dolore nostrud in et id irure ad exercitation amet esse pariatur
          quis cupidatat. Cupidatat laborum Lorem ad et est occaecat occaecat
          sunt excepteur nostrud qui mollit. Est enim velit proident
          reprehenderit pariatur duis laboris.
        </p>
        <section className="section1-button-section">
          <a className="section1-button button-blur" href="">
            Zip Code
          </a>
          <a className="section1-button highlight button-blur" href="">
            Get Started
          </a>
        </section>
      </section>
      <section className="section-right relative">
        {/* <img className='background-object-2' src={require('../../images/topleftblob.png')} alt="" /> */}
        <img className='section1-a-image' src={require('../../images/cooking2.png')} alt="" />
        <img className='section1-image' src={require('../../images/cooking.png')} alt="" />
      </section>
    </section>
  );
};

export default Section1;
