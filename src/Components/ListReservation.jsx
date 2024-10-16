import React, { useEffect, useState } from "react";
import { SolicitaMenu } from "../firebase/firebaseFunctions";

const ListReservation = () => {
  const [reservations, setReservation] = useState([]);

  const listenListReservation = () => {
    SolicitaMenu(setReservation, "reservaciones");
  };

  useEffect(() => {
    listenListReservation();
  }, []);

  return (
    <>
      <h3 className="text-center mt-3">Reservation list</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col">People</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>
          
            {reservations.map((reservation, key) => {
                return(
                    <tr key={key}>
                        <th scope="row">{reservation.name}</th>
                        <td>{reservation.date}</td>
                        <td>{reservation.people}</td>
                        <td>{reservation.date}</td>
                        <td>{reservation.time}</td>
                    </tr>
                )
            })
            }

          
        </tbody>
      </table>
    </>
  );
};

export default ListReservation;
