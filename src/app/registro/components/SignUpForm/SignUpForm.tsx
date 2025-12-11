import React from 'react';
import styles from './SignUpForm.module.css';
import GradientButton from '@/app/components/buttons/GradientButton/GradientButton';
import ShareButton from '@/app/components/buttons/ShareButton/ShareButton';


const SignUpForm: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Crea tu cuenta</div>
      <div className={styles.subtitle}>Por favor, completa los siguientes datos</div>
      <form>
        <div className={styles.formGroup}>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="firstName">Nombres</label>
            <input className={styles.input} type="text" id="firstName" name="firstName" placeholder="Nombre" />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="lastName">Apellidos</label>
            <input className={styles.input} type="text" id="lastName" name="lastName" placeholder="Apellido" />
          </div>
        </div>
        <div className={styles.formGroup}>
            <div className={styles.inputContainer}>
                <label className={styles.label} htmlFor="email">Correo electrónico</label>
                <input className={styles.input} type="email" id="email" name="email" placeholder="micorreo@gmail.com" />
            </div>
        </div>
        <div className={styles.separator}>ó</div>
        <div className={styles.storesButtonContainer}>
            <ShareButton 
                href="#"
                text="CONECTAR CON GOOGLE"
                width="auto"
                height="44px"
                icon='/icons/stores/google.svg'
            />
            <ShareButton 
                href="#"
                text="CONECTAR CON APPLE"
                width="auto"
                height="44px"
                icon='/icons/stores/apple.svg'
            />
        </div>
        
        <div className={styles.buttonContainer}>
          <ShareButton 
                href="#"
                text="IR ATRÁS"
                width="auto"
                height="48px"
            />
          <GradientButton 
            href="#"
            text="CONTINUAR"
            width="auto"
            height="48px"
          />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
