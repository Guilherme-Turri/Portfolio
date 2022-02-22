import React from 'react';
import Svg from './Svg.js';
import styles from '../../Components/styles.module.css';
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.flexLeft}>
        <div className={styles.hi}> Hi, I'm</div>
        <div className={styles.name}>Guilherme Turri</div>
        <div className={styles.frontend}>
          {' '}
          I'm a <span className={styles.spanBlue}> Front End Developer</span>
        </div>
        <p className={styles.description}>
          {' '}
          For almost 13 years working and studing in the IT area in <br />
          Vale do Paraíba
        </p>
      </div>

      <div className={styles.flexRight}>
        <div className={styles.symbol}>
          <Svg />
        </div>
      </div>
    </div>
  );
};

export default Home;
