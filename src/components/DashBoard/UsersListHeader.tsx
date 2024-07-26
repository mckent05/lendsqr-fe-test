import React from 'react'
import { IoFilterSharp } from "react-icons/io5";
import { UsersListHeaderHeaderProps } from './UserListContainer';

const UsersListHeader = ({name, showFilter}:UsersListHeaderHeaderProps) => {
  return (
    <div className='users__list__header__cont'>
        <h2 className='users__list__header'>{name.name}</h2>
        <IoFilterSharp className='filter' onClick={() => showFilter()} />
    </div>
  )
}

export default UsersListHeader
