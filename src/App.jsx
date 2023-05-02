import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { Catalog } from './pages/Catalog';
import { Cart } from './pages/Cart';
import { useContextActions } from './context/context';
import './App.scss';

export const App = () => {
  const { setInitState, setLoading } = useContextActions();

  React.useEffect(() => {
    (async () => {
      const data = await axios.get('https://moscow.fargospc.ru/test/json/');
      setInitState(data.data);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="wrapper">
      <h1 className="title">Каталог товаров</h1>
      <Routes>
        <Route path={'/'} element={<Catalog />} />
        <Route path={'/product/:id'} element={<Cart />} />
      </Routes>
    </div>
  );
};
