import React from 'react';
import styles from '../../Components/styles.module.css';
import ContactUs from './ContactUs';
import Github from './github.svg';
import Linkedin from './linkedin.svg';

const Contact = () => {
  return (
    <div className={styles.containerContact}>
      <div className={styles.contactLeft}>
        <div className={styles.contactMe}>Let's Connnect</div>
        <div className={styles.info}>
          {' '}
          Para mais informações,
          <br /> entre em <br />
          contato comigo!
        </div>
        <div className={styles.socialMedia}>
          <div className={styles.github}>
            <a
              href="https://github.com/Guilherme-Turri"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Github} alt="LinkedIn logo" />
            </a>
          </div>
          <div className={styles.linkedin}>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="LinkedIn logo" />
            </a>
          </div>
        </div>
        <div className={styles.dataGuilherme}>
          <p>guilhermeturri@icloud.com</p>
          <p>(12)991272956</p>
        </div>
      </div>
      <div className={styles.contactRight}>
        <ContactUs />
      </div>
    </div>
  );
};

export default Contact;
