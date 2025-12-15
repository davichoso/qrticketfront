import React, { Suspense } from 'react';
import styles from './page.module.css';
import SignUpForm from './components/SignUpForm/SignUpForm';

const RegistrationPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageColumn}></div>
      <div className={styles.formColumn}>
        <Suspense fallback={<div>Cargando...</div>}>
          <SignUpForm />
        </Suspense>
      </div>
    </div>
  );
};

export default RegistrationPage;
