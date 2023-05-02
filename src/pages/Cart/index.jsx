import React from 'react';
import { useParams } from 'react-router-dom';
import './cart.scss';
import { getItemById } from '../../utils';
import { useContextState } from '../../context/context';

export const Cart = () => {
  const { id } = useParams();
  const { initialProducts, loading } = useContextState();
  const product = getItemById(initialProducts, id);

  if (loading) {
    return <div />;
  }
  return (
    <div className="cart">
      <div className="cart__image">
        <img src={product.src} alt={product.title} />
      </div>
      <div className="cart__title">
        <h2>{product.title}</h2>
      </div>
    </div>
  );
};
