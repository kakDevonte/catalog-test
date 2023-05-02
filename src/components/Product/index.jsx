import React from 'react';
import { NavLink } from 'react-router-dom';
import './product.scss';

export const Product = (props) => {
  return (
    <div className="product">
      <NavLink to={`/product/${props.id}`}>
        <div className="product__image">
          <img src={props.src} alt={props.title} />
        </div>
        <div className="product__title">
          <span>{props.title}</span>
        </div>
      </NavLink>
    </div>
  );
};
