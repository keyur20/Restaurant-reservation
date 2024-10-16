import React, { useState, useEffect } from 'react'
import Footer from '../Components/Footer';
import Header from '../Components/Header'
import PrintMenu from '../Components/PrintMenu'

import { SolicitaMenu } from '../firebase/firebaseFunctions';

const MenuPage = () => {

  const [appetizer, setAppetizer] = useState([]);
  const [individualDishes, setIndividualDishes] = useState([]);
  const [secondDishes, setSecondDishes] = useState([]);
  const [comboBanquets, setComboBanquets] = useState([]);
  const [menuDrinks, setMenuDrinks] = useState([]);
  
  const listenAppetizer = () => {
    SolicitaMenu(setAppetizer, 'appetizers');
  };

  const listenIndividualDishes = () => {
    SolicitaMenu(setIndividualDishes, 'individual-dishes');
  };

  const listenSecondaryDishes = () => {
    SolicitaMenu(setSecondDishes, 'second-dishes');
  };

  const listenBanquets = () => {
    SolicitaMenu(setComboBanquets, 'banquets');
  };

  const listenMenuDrinks = () => {
    SolicitaMenu(setMenuDrinks, 'drinks');
  };

  useEffect(() => {
    listenAppetizer();
  }, []);

  useEffect(() => {
    listenIndividualDishes();
  }, []);

  useEffect(() => {
    listenSecondaryDishes();
  }, []);

  useEffect(() => {
    listenBanquets();
  }, []);

  useEffect(() => {
    listenMenuDrinks();
  }, []);

  return (
    <>
        <Header title="Welcome to Dragon Masala" />
        <main className='container my-3'>
            <h3 className="text-center mb-4">Entries</h3>
            <article className='row menu'>
              <PrintMenu appetizer={appetizer}/>
            </article>
            <h3 className="text-center mb-4 mt-5">Main Dishes</h3>
            <article className='row menu'>
              <PrintMenu appetizer={individualDishes}/>
            </article>
            <h3 className="text-center mb-4 mt-5">Rice and Chow Mein</h3>
            <article className='row menu'>
              <PrintMenu appetizer={secondDishes}/>
            </article>
            <h3 className="text-center mb-4 mt-5">Banquets</h3>
            <article className='row menu'>
              <PrintMenu appetizer={comboBanquets}/>
            </article>
            <h3 className="text-center mb-4 mt-5">Drinks</h3>
            <article className='row menu'>
              <PrintMenu appetizer={menuDrinks}/>
            </article>
        </main>
        <Footer />
    </>
  )
}

export default MenuPage