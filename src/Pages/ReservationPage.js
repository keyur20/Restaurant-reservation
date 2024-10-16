import React from 'react';
import Header from '../Components/Header';
import FormReservation from '../Components/FormReservation';
import { RegistraReserva } from '../firebase/firebaseFunctions';
import ListReservation from '../Components/ListReservation';
import Footer from '../Components/Footer';

const ReservationPage = () => {

  const onSubmitted = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const book = Object.fromEntries(formData);
    agregarReserva(book);
  };
  
  const agregarReserva = (nuevaReserva) => {
    RegistraReserva(nuevaReserva);
    document.getElementById('reservationForm').reset();
  }

  return (
    <>
      <Header title="Welcome to Dragon Masala" />
      <main className="row">
        <article className="col">
          <FormReservation  onSubmitted={onSubmitted} />
        </article>
      </main>
      <section className='row'>
        <article className='col'>
          <ListReservation />
        </article>
      </section>
      <Footer />
    </>
  );
};

export default ReservationPage;
