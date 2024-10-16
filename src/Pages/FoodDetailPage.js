import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { SolicitaMenuId } from "../firebase/firebaseFunctions";

const FoodDetailPage = () => {
  const { id } = useParams();

  const [dish, setDish] = useState([]);

  useEffect(() => {
    const listenMenuCompleto = () => {
      SolicitaMenuId(setDish, "menu", id);
    };

    listenMenuCompleto();
  }, [id]);

  return (
    <>
      <Header title="Welcome to Dragon Masala"/>
      <h3 className="text-center my-3">Dish Details</h3>
      <main className="row">
        <article className="col card-detail">
          {dish.map((item, key) => {
            return (
              <div className="card my-3 text-center" style={{ width: "23rem" }} key={key}>
                <img
                  src={item.img}
                  className="card-img-top"
                  alt="plato del dia"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <NavLink to={'/menu'} className="btn btn-warning btn-lg my-button">$ {item.price}</NavLink>  
                  </div>
              </div>
            );
          })}
        </article>
      </main>
      <Footer />
    </>
  );
};

export default FoodDetailPage;
