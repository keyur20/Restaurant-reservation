import React from 'react'

const Form = ({onSubmitted}) => {
  return (
    <>
        <form id="reservationForm" onSubmit={onSubmitted}>
            <h3 className="text-center my-3">Make your Reservation</h3>
            <div className="row g-2 mb-3 mx-3">
              <div className="col-md mx-3">
                <div className="form-floating">
                  <input type="text" className="form-control" name="name" />
                  <label htmlFor="name">Number</label>
                </div>
              </div>
              <div className="col-md mx-3">
                <div className="form-floating">
                  <input type="email" className="form-control" name="email" />
                  <label htmlFor="email">Email Id</label>
                </div>
              </div>
            </div>
            <div className="row g-2 mb-3 mx-3">
              <div className="col-md mx-3">
                <div className="form-floating">
                  <input type="text" className="form-control" name="phone" />
                  <label htmlFor="phone">Telephone</label>
                </div>
              </div>
              <div className="col-md mx-3">
                <div className="form-floating">
                  <select className="form-select" name="people">
                    <option defaultValue>Select no of people</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                    <option value={4}>Four</option>
                    <option value={5}>Five</option>
                    <option value={6}>Six</option>
                  </select>
                  <label htmlFor="people">Number of people</label>
                </div>
              </div>
            </div>
            <div className="row g-2 mb-3 mx-3">
              <div className="col-md mx-3">
                <div className="form-floating">
                  <input type="date" className="form-control" name="date" />
                  <label htmlFor="date">Date</label>
                </div>
              </div>
              <div className="col-md mx-3">
                <div className="form-floating">
                  <input type="time" className="form-control" name="time" />
                  <label htmlFor="time">Time</label>
                </div>
              </div>
            </div>
            <article className="row my-3">
              <div className="col text-center">
                <button className="btn btn-warning my-button" type="submit">Reservar</button>
              </div>
            </article>
          </form>
    </>
  )
}

export default Form