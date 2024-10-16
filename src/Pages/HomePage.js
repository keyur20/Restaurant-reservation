import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import { NavLink } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/FirebaseConnection";

import homeImage from '../img/home-article.png';
import reservationImage from '../img/reservacion.svg';
import locationImage from '../img/location.svg';

const HomePage = () => {
  
  const [commonDishes, setCommonDishes] = useState([])
  
  const listenCommonDishes = () => {
    onSnapshot(collection(db, "popular-dishes"), (snapshot) => {
      const dishes = [];
      snapshot.docs.forEach((dish) => {
        dishes.push({
          ...dish.data(),
          id: dish?.id,
        });
      });
      setCommonDishes(dishes);
    });
  };

  useEffect(() => {
    listenCommonDishes()
  }, []);

  return (
    <>
      <Header title="Welcome to Dragon Masala" />
      <main className="row align-items-center mt-2">
        <div className="col-lg home-article text-center">
          <img src={homeImage} className="img-fluid" alt="Li Fong Food Family" />
        </div>
        <div className="col-lg px-5">
          <p className="fst-italic fs-4 mision">The dishes come from our family, they come from our roots. Our dishes contain our culture, our history and with it we cultivate strong ties with your family.</p>
        </div>
      </main>
      <section className="row menu mb-5">
        <h3 className="text-center mb-4">Platos Favoritos</h3>
        {commonDishes.map((dish, key) => {
          return (
            <div
              className="card col-4 my-2"
              style={{ width: "18rem" }}
              key={key}
            >
              <img src={dish.img} className="card-img-top mt-3" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{dish.name}</h5>
                <p className="card-text">{dish.comment}</p>
                <NavLink to={`/detail-food/${dish.id}`} className="btn btn-warning my-button">
                  Ver mas...
                </NavLink>
              </div>
            </div>
          );
        })}
      </section>
      <section className='row'>
        <article className='col-lg right-article text-center'>
          <NavLink to='/reservation'>
            <img src={reservationImage} className="img-fluid" alt="Reservaciones Li Fong Food"/>
          </NavLink>
        </article>
        <article className="col-lg left-article text-center">
          <h3>Nuestra Ubicación</h3>
        <NavLink to='/contactus'>
            <img src={locationImage} className="img-fluid" alt="Reservaciones Li Fong Food"/>
          </NavLink>
        </article>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
