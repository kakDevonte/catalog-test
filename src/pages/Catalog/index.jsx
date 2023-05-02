import React from 'react';
import { Product } from '../../components/Product';
import { Search } from '../../components/Search';
import { useContextActions, useContextState } from '../../context/context';
import { arraySearch } from '../../utils';
import { Skeleton } from '../../components/Product/Skeleton';
import { Pagination } from '../../components/Pagination';
import './catalog.scss';

export const Catalog = () => {
  const { products, search, initialProducts, loading, page } =
    useContextState();
  const { setProducts, setPage } = useContextActions();
  console.log(search);

  React.useEffect(() => {
    getProducts();
  }, [search, page]);

  const onChangePage = (value) => {
    setPage(value);
  };
  const getProducts = () => {
    const result = arraySearch(initialProducts, 'title', search);
    setProducts(result);
  };

  const skeletons = [...new Array(13)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const list = products
    .slice(page * process.env.PAGE, (page + 1) * process.env.PAGE)
    .map((item) => <Product key={item.id} {...item} />);

  const notFound = <h1 className="not-found">Ничего не найдено :(</h1>;

  const content = list.length > 0 ? list : notFound;

  return (
    <div className="catalog">
      <Search />
      <div className="products">{loading ? skeletons : content}</div>
      {list.length > 0 && <Pagination onChangePage={onChangePage} />}
    </div>
  );
};
