import React from 'react'
import logo from '../img/logo.svg';

const Header = ({title}) => {
  return (
    <header className="row text-center align-items-center fw-bolder text-warning px-5">
        <div className='col-8'>
        <span className='fs-1'>{title}</span>
        </div>
        <div className='col-4'>
        <img src={logo} className="img-fluid" alt="chinese food" />
        </div>
    </header>
  )
}

export default Header