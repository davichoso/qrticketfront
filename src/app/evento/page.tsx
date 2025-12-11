import React from 'react';
import styles from './page.module.css';
import EventDetails from './components/EventDetails/EventDetails';
import EventInfo from './components/EventInfo/EventInfo';
import TicketForm from './components/TicketForm/TicketForm';
import EventDescription from './components/EventDescription/EventDescription';
import ReservationSection from '@/sections/ReservationSection/ReservationSection';
import FAQSection from '@/sections/FAQSection/FAQSection';

const EventPage = () => {

  const eventDescription = [
    "La transición se acerca y el final del Infierno cada vez está más próximo.",
    "Prepárate para un show inmersivo y presta atención que te mostraremos que viene la próxima temporada."
  ];

  const tickets = [
    {
      name: "Lounge VIP",
      description: "Mesa numerada en zona VIP. 12 invitados, incluye souvenirs y sixpack de corona",
      price: "800 Bs",
      
    },
    {
      name: "Lounge",
      description: "Mesa numerada en zona general. 12 invitados, incluye souvenirs y sixpack de corona",
      price: "600 Bs",
      soldOut: true,
    },
    {
      name: "VIP",
      description: "Acceso a zona VIP. Baño y bar exclusivos zona VIP",
      price: "80 Bs",
      
    },
    {
      name: "General",
      description: "Ingreso a sector general",
      price: "40 Bs",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <EventDetails />
        </div>
        <div className={styles.rightColumn}>
          <EventInfo
            title="Bresh 2024"
            date="Sábado 30 de abril"
            time="21:00 hrs"
            location="Alice Park"
            address="Av. Guillermo Urquidi #1231 Cochabamba, Bolivia"
            dateIcon="/icons/calendar-icon.svg"
            locationIcon="/icons/pin-icon.svg"
          />
          <TicketForm tickets={tickets}/>
          <div className={styles.separator}></div>
          <EventDescription
            description={eventDescription}
            title='Acerca del evento'
          />
        </div>
      </div>
      <ReservationSection />
      <FAQSection />
    </>
  ); 
};

export default EventPage;
