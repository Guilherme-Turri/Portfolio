import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../../Components/styles.module.css';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6egt9yh',
        'template_ju7tmqn',
        form.current,
        'user_MIl6wwPW05GQwzARfuZM0',
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('email enviado com sucesso');
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form}>
      <div className={styles.containerForm}>
        <label>Nome:</label>
        <input type="text" name="user_name" className={styles.inputData} />
        <label>Email:</label>
        <input type="email" name="user_email" className={styles.inputData} />
        <label>Mensagem:</label>
        <textarea name="message" />
        <input type="submit" value="Enviar" className={styles.sendBtn} />
      </div>
    </form>
  );
};

export default ContactUs;
