import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

import notfounded from "../img/notfounded.png";

const NotFoundPage = () => {
  return (
    <>
        <Header title="Welcome to Dragon Masala" />
        <main className='row'>
            <article className='col text-center'>
                <h3 className="my-4">Not Founded Page</h3>
                <img src={notfounded} className="img-fluid" alt="Li Long Food" />
            </article>
        </main>
        <Footer />
    </>
  )
}

export default NotFoundPage