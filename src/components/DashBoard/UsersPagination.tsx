import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { RootState } from "../../Store/configureStore";
import ListUsers from "./ListUsers";

interface UsersPaginationProp {
  itemsPerPage: number;
}

const UsersPagination = ({ itemsPerPage }: UsersPaginationProp) => {
  const [itemOffset, setItemOffset] = useState(0);

  const userStore = useSelector((state: RootState) => state.users);

  const { users } = userStore;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = users.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(users.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ListUsers
        currentItems={currentItems}
        pageOffset={itemOffset}
        totalItems={users.length}
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
