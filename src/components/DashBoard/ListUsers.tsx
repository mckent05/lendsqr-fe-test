import React, {useState} from 'react'
import UsersDetails from './UsersDetails'

const ListUsers = () => {
    const [viewModalIndex, setViewModalIndex] = useState<number | null>(null)

    const toggleModal = (modaIndex:number) => {
        if( viewModalIndex === modaIndex ) {
          return setViewModalIndex(null)
        }
        setViewModalIndex(modaIndex)
      }
  return (
    <div className="all__user__cont">
        <UsersDetails status="blacklisted" modalToggle={toggleModal} currentModal={viewModalIndex} />
        <UsersDetails status="inactive" modalToggle={toggleModal} currentModal={viewModalIndex} />
        <UsersDetails status="active" modalToggle={toggleModal} currentModal={viewModalIndex} />
        <UsersDetails status="pending" modalToggle={toggleModal} currentModal={viewModalIndex} />
    </div>
  )
}

export default ListUsers
