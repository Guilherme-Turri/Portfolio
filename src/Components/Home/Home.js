import React from 'react';
import Svg from './Svg.js';
import styles from '../../Components/styles.module.css';
const Home = () => {
  return (
    <div className={styles.container} id="home">
      <div className={styles.flexLeft}>
        <div className={styles.hi}> Hi, I'm</div>
        <div className={styles.name}>Guilherme Turri</div>
        <div className={styles.frontend}>
          {' '}
          I'm a <span className={styles.spanBlue}> Front End Developer</span>
        </div>
        <p className={styles.description}> Stack: JavaScript and React JS</p>
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
