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
            <img src={Github} alt="GitHub logo" />
          </div>
          <div className={styles.linkedin}>
            <img src={Linkedin} alt="LinkedIn logo" />
          </div>
        </div>
        <div className={styles.dataGuilherme}>
          <p>guilhermeturri@icloud.com</p>
          <p>(12)991272945</p>
        </div>
      </div>
      <div className={styles.contactRight}>
        <ContactUs />
      </div>
    </div>
  );
};

export default Contact;
