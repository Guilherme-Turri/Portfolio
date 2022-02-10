import React from 'react';
import Svg from './Svg.js';
import styles from '../../Components/styles.module.css';
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.flexLeft}>
        <p className={styles.hi}> Hi, I'm</p>
        <h1 className={styles.name}>Guilherme Turri</h1>
        <h2>
          {' '}
          I'm a <span className={styles.span1}> Front End Developer</span>
        </h2>
        <p className={styles.description}>
          {' '}
          For almost 13 years working and studing in the IT area in <br />
          Vale do Paraíba
        </p>
      </div>

      <div className={styles.flexRight}>
        <Svg />
      </div>
    </div>
  );
};

export default Home;
