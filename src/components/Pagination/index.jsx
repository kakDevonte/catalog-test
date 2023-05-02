import React from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.scss';
import { useContextState } from '../../context/context';

export const Pagination = ({ onChangePage }) => {
  const { products, page } = useContextState();

  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => {
        onChangePage(event.selected);
      }}
      pageRangeDisplayed={2}
      pageCount={Math.ceil(products.length / process.env.PAGE)}
      forcePage={page} //currentPage - 1
      previousLabel="<"
    />
  );
};
