import React from 'react';
import styles from '../../Components/styles.module.css';
import { DataExperience } from './DataExperience.js';
const Experience = () => {
  console.log(DataExperience[0]);
  return (
    <div className={styles.experienceContainer}>
      <div className={styles.title}>
        <h3>Experience</h3>{' '}
      </div>
      <div className={styles.jobs}>
        {DataExperience.map((item) => (
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
