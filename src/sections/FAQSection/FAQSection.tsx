import React from 'react';
import styles from './FAQSection.module.css';
import FAQItem from '@/app/components/FAQItem/FAQItem';

const FAQSection: React.FC = () => {
  const faqItems = [
    {
      question: "Si compro un lounge para mis invitados y yo, ¿Deberán mis invitados pagar algún monto extra?",
      answer: "No, el monto pagado incluye el acceso de tus invitados."
    },
    {
      question: "¿Qué debo hacer si no recibo las entradas en mi correo?",
      answer: "Por favor, verifica tu carpeta de spam o comunícate con nuestro soporte."
    },
    {
      question: "¿Qué puedo hacer si perdí mi entrada con el código QR?",
      answer: "Puedes reimprimir tu entrada desde el correo de confirmación o comunicarte con soporte."
    },
    {
      question: "¿Puedo traspasar mi entrada a otra persona?",
      answer: "Sí, puedes transferir tu entrada a otra persona contactando a soporte."
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.title}>Preguntas frecuentes</div>
      {faqItems.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQSection;
