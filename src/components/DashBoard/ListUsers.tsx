import React, { useState, useEffect, useRef } from 'react'
import UsersDetails from './UsersDetails'
import { UserState } from '../../Store/userSlice'

interface ListUsersProps {
  currentItems: UserState[]
  totalItems: number
  pageOffset: number
}

const ListUsers = ({
  currentItems,
  totalItems,
  pageOffset,
}: ListUsersProps) => {
  const [viewModalIndex, setViewModalIndex] = useState<number | null>(null)

  const useOutsideAlerter = (ref: any) => {
    useEffect(() => {
      const handleClickOutside = (event: { target: any }) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setViewModalIndex(null)
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  const toggleModal = (modalIndex: number) => {
    if (viewModalIndex === modalIndex) {
      return setViewModalIndex(null)
    }
    setViewModalIndex(modalIndex)
  }

  const wrapperRef = useRef<null>(null)
  useOutsideAlerter(wrapperRef)
  return (
    <div className="all__user__cont">
      {currentItems.map((item, index) => (
        <UsersDetails
          modalToggle={toggleModal}
          currentModal={viewModalIndex}
          user={item}
          userIndex={index}
          handleRef={wrapperRef}
        />
      ))}
      <div className="show__page__details">
        <p className="list__number">{`Showing ${
          currentItems.length + pageOffset
        } out of ${totalItems}`}</p>
      </div>
    </div>
  )
}

export default ListUsers
