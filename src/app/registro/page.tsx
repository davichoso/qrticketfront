import React from 'react';
import styles from './page.module.css';
import SignUpForm from './components/SignUpForm/SignUpForm';

const RegistrationPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageColumn}></div>
      <div className={styles.formColumn}>
        <SignUpForm />
      </div>
    </div>
  );
};

export default RegistrationPage;
