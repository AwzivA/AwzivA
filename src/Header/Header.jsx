import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'

import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <ul className="my-nav navbar navbar-dark bg-dark">
        <li> <Link to="/">Главная</Link> </li>
        <li> <Link to="/about">О нас</Link> </li>
        <li> <Link to="/menu">Меню</Link> </li>
        <li> <Link to="/order">Офрмить заказ</Link> </li>
    </ul>
  )
}