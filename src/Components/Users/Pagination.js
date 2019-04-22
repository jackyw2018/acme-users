import React from 'react';

import Pagination from 'react-bootstrap/Pagination';

const PaginationSection = ({ onPageClick, currentPage, pages, searchTerm }) => {
  return (
    <Pagination>
      <Pagination.First
        onClick={() => {
          searchTerm ? onPageClick(1, searchTerm) : onPageClick(1);
        }}
      />
      <Pagination.Prev
        disabled={currentPage === 1}
        onClick={() => {
          searchTerm
            ? onPageClick(currentPage - 1, searchTerm)
            : onPageClick(currentPage - 1);
        }}
      />
      <Pagination.Item active>{currentPage}</Pagination.Item>
      <Pagination.Next
        disabled={currentPage === pages}
        onClick={() => {
          searchTerm
            ? onPageClick(currentPage + 1, searchTerm)
            : onPageClick(currentPage + 1);
        }}
      />
      <Pagination.Last
        onClick={() => {
          searchTerm ? onPageClick(pages, searchTerm) : onPageClick(pages);
        }}
      />
    </Pagination>
  );
};

export default PaginationSection;
