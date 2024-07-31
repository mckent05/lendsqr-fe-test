import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import ListUsers from "./ListUsers";
import { UserState } from "../../Store/userSlice";

interface UsersPaginationProp {
  itemsPerPage: number;
  items: UserState[];
}

const UsersPagination = ({ itemsPerPage, items }: UsersPaginationProp) => {
  const [itemOffset, setItemOffset] = useState<number>(0);

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
