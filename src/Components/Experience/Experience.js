import React from 'react';
import styles from '../../Components/styles.module.css';
import { DataExperience } from './DataExperience.js';
const Experience = () => {
  return (
    <div className={styles.experienceContainer} id="experience">
      <div className={styles.title}>Experience</div>
      <div className={styles.jobs}>
        {DataExperience.map((item, index) => (
          <>
            <div className={styles.empresa}>{item.empresa}</div>
            <div className={styles.cargo}>
              {item.cargo}{' '}
              <span className={styles.duracao}>{item.duracao}</span>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
export default Experience;
