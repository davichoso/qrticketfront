import React from 'react';
import styles from './page.module.css';
import ReservationSection from '@/sections/ReservationSection/ReservationSection';
import FAQSection from '@/sections/FAQSection/FAQSection';
import EventDetails from '../evento/components/EventDetails/EventDetails';
import EventInfo from '../evento/components/EventInfo/EventInfo';
import TicketForm from '../evento/components/TicketForm/TicketForm';
import EventDescription from '../evento/components/EventDescription/EventDescription';

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
      chooseSeats: true,
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
      chooseSeats: true,
    },
    {
      name: "General",
      description: "Ingreso a sector general",
      price: "40 Bs",
      chooseSeats: true,
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <EventDetails brokerInfo={false} imageSrc='/image-card-event-example-02.jpg'/>
        </div>
        <div className={styles.rightColumn}>
          <EventInfo
            title="El infierno - Cap. 6"
            date="Sábado 11 de mayo"
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
