'use client'
import React, { useState, FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './SignUpForm.module.css';
import GradientButton from '@/app/components/buttons/GradientButton/GradientButton';
import ShareButton from '@/app/components/buttons/ShareButton/ShareButton';


const SignUpForm: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect') || '/evento';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const [isValidatingEmail, setIsValidatingEmail] = useState(false);
  const [isEmailValidated, setIsEmailValidated] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const formEmail = formData.get('email') as string;

    // Basic validation
    if (!firstName || !lastName || !formEmail || !password || !confirmPassword) {
      alert('Por favor, completa todos los campos');
      setIsSubmitting(false);
      return;
    }

    // Check if email is validated
    if (!isEmailValidated || formEmail !== email) {
      alert('Por favor, valida tu correo electrónico antes de continuar');
      setIsSubmitting(false);
      return;
    }

    // Validate password strength
    const passwordValidationError = validatePassword(password);
    if (passwordValidationError) {
      setPasswordError(passwordValidationError);
      alert(passwordValidationError);
      setIsSubmitting(false);
      return;
    }

    // Validate passwords match
    if (password !== confirmPassword) {
      setConfirmPasswordError('Las contraseñas no coinciden');
      alert('Las contraseñas no coinciden');
      setIsSubmitting(false);
      return;
    }

    // Here you would typically send the data to your backend API
    // For now, we'll just simulate a successful registration
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Redirect to the event page after successful registration
      router.push(redirectUrl);
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Hubo un error al registrar. Por favor, intenta nuevamente.');
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    router.back();
  };

  const validatePassword = (pwd: string): string => {
    if (pwd.length < 8) {
      return 'La contraseña debe tener al menos 8 caracteres';
    }
    
    // Check for alphanumeric (at least one letter and one number)
    const hasLetter = /[a-zA-Z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    
    if (!hasLetter || !hasNumber) {
      return 'La contraseña debe contener letras y números';
    }
    
    // Check for special character
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd);
    
    if (!hasSpecialChar) {
      return 'La contraseña debe contener al menos un carácter especial';
    }
    
    return '';
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    const error = validatePassword(value);
    setPasswordError(error);
    
    // Also validate confirm password if it's already filled
    if (confirmPassword) {
      if (value !== confirmPassword) {
        setConfirmPasswordError('Las contraseñas no coinciden');
      } else {
        setConfirmPasswordError('');
      }
    }
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    if (value !== password) {
      setConfirmPasswordError('Las contraseñas no coinciden');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleValidateEmail = async () => {
    if (!email) {
      alert('Por favor, ingresa un correo electrónico');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, ingresa un correo electrónico válido');
      return;
    }

    setIsValidatingEmail(true);
    
    try {
      // Here you would typically send a validation request to your backend API
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsEmailValidated(true);
      setIsValidatingEmail(false);
    } catch (error) {
      console.error('Error validating email:', error);
      alert('Hubo un error al validar el correo. Por favor, intenta nuevamente.');
      setIsValidatingEmail(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Crea tu cuenta</div>
      <div className={styles.subtitle}>Por favor, completa los siguientes datos</div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="firstName">Nombres</label>
            <input className={styles.input} type="text" id="firstName" name="firstName" placeholder="Nombre" required />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="lastName">Apellidos</label>
            <input className={styles.input} type="text" id="lastName" name="lastName" placeholder="Apellido" required />
          </div>
        </div>
        <div className={styles.formGroup}>
            <div className={styles.inputContainer}>
                <label className={styles.label} htmlFor="email">Correo electrónico</label>
                <div className={styles.emailInputWrapper}>
                  <input 
                    className={styles.input} 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="micorreo@gmail.com" 
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setIsEmailValidated(false);
                    }}
                    required 
                  />
                  <GradientButton
                    text={isValidatingEmail ? "VALIDANDO..." : isEmailValidated ? "VALIDADO" : "VALIDAR"}
                    width="auto"
                    height="37px"
                    onClick={(e) => {
                      e?.preventDefault();
                      handleValidateEmail();
                    }}
                    className={styles.validateButton}
                  />
                </div>
                <div className={styles.validationMessage}>
                  Necesitamos validar tu email para enviarte las entradas
                </div>
            </div>
        </div>
        <div className={styles.formGroup}>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="password">Contraseña</label>
            <input 
              className={`${styles.input} ${passwordError ? styles.inputError : ''}`}
              type="password" 
              id="password" 
              name="password" 
              placeholder="Contraseña" 
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
              required 
            />
            {passwordError && (
              <div className={styles.errorMessage}>{passwordError}</div>
            )}
            {!passwordError && password && (
              <div className={styles.successMessage}>Contraseña válida</div>
            )}
          </div>
        </div>
        <div className={styles.formGroup}>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="confirmPassword">Confirmar contraseña</label>
            <input 
              className={`${styles.input} ${confirmPasswordError ? styles.inputError : ''}`}
              type="password" 
              id="confirmPassword" 
              name="confirmPassword" 
              placeholder="Confirma tu contraseña" 
              value={confirmPassword}
              onChange={(e) => handleConfirmPasswordChange(e.target.value)}
              required 
            />
            {confirmPasswordError && (
              <div className={styles.errorMessage}>{confirmPasswordError}</div>
            )}
            {!confirmPasswordError && confirmPassword && password === confirmPassword && (
              <div className={styles.successMessage}>Las contraseñas coinciden</div>
            )}
          </div>
        </div>
        
        <div className={styles.buttonContainer}>
          <ShareButton 
                href="#"
                text="IR ATRÁS"
                width="auto"
                height="48px"
                onClick={(e) => {
                  e.preventDefault();
                  handleBack();
                }}
            />
          <GradientButton 
            text={isSubmitting ? "PROCESANDO..." : "CONTINUAR"}
            width="auto"
            height="48px"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
