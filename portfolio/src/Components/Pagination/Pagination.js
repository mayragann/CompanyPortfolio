import React from "react";
import "./Pagination.css";
import ReactPaginate from "react-paginate";

const Pagination = ({handlePageClick,pageCount}) => {
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        breakClassName="break-class"
        nextLabel="Next"
        pageClassName="pagination-design"
        containerClassName="pagination"
        previousLinkClassName="pagination__link"
        nextLinkClassName="pagination__link"
        activeClassName="pagination__link--active"
        activeLinkClassName="active-link-text"
        disabledClassName="pagination__link--disabled"
        nextClassName="next-button"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Previous"
        previousClassName="previous-button"
        pageLinkClassName="selected-page"
   
      />
    </div>
  );
};

export default Pagination;
