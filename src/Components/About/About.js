import React from 'react';
import { Data } from './Data.js';
import styles from '../../Components/styles.module.css';

const About = () => {
  const [selected, setSelected] = React.useState(null);
  const open = 'v';
  const closed = '>';
  const toogle = (index) => {
    console.log(index);
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };
  const nulo = React.useRef('');

  React.useEffect(() => {}, []);

  return (
    <div className={styles.about}>
      <div className={styles.title}>
        <h3>Academic Education</h3>
        <p className={styles.formacao}>
          {' '}
          Ciência da Computação UNIP -{' '}
          <span className={styles.span2}>Concluído em 2016</span>
        </p>
      </div>
      <div className={styles.title2}>Certificades</div>
      <div className={styles.containerCertificade}>
        {Data.map((item, index) => (
          <div
            className={styles.containerAccorion}
            onClick={() => toogle(index)}
          >
            <div className={styles.titleAccordion}>
              {' '}
              {item.curso}
              <spam>{selected === index ? open : closed}</spam>
            </div>
            <div
              ref={nulo}
              className={
                selected === index ? styles.descricaoAccordion : styles.none
              }
            >
              {item.local} - conclusão em {item.conclusao}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
