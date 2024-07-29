import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { RootState } from "../../Store/configureStore";
import ListUsers from "./ListUsers";
import { UserState } from "../../Store/userSlice";

interface UsersPaginationProp {
  itemsPerPage: number;
  items: UserState[];
}

const UsersPagination = ({ itemsPerPage, items }: UsersPaginationProp) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ListUsers
        currentItems={currentItems}
        pageOffset={itemOffset}
        totalItems={items.length}
      />
      <ReactPaginate
        breakLabel="..."
        breakClassName="break__class"
        nextLabel="next"
        marginPagesDisplayed={10}
        pageClassName="page__class"
        containerClassName="pagination__cont"
        previousClassName="previous__class"
        nextClassName="next__class"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="prev"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default UsersPagination;
