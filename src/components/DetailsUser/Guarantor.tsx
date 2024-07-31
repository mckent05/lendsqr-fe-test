import React from 'react'
import { guarantor } from '../../Store/userSlice'

interface Guarantorprops {
  guarantorInfo: guarantor | undefined
}

const Guarantor = ({guarantorInfo}: Guarantorprops) => {
  return (
    <div className="guarantor__cont personal__info__cont">
      <h1 className="category__name">{guarantorInfo?.categoryName}</h1>
      <div className="personal__info__wrapper">
        <div className="full__name__guarantor single__info">
          <p>Full name</p>
          <h3>{guarantorInfo?.name}</h3>
        </div>
        <div className="phono__guarantor single__info">
          <p>phone number</p>
          <h3>{guarantorInfo?.phoneNo}</h3>
        </div>
        <div className="email__guarantor single__info">
          <p>email address</p>
          <h3>{guarantorInfo?.email}</h3>
        </div>
        <div className="relationship__guarantor single__info">
          <p>Relationship</p>
          <h3>{guarantorInfo?.relationship}</h3>
        </div>
      </div>
    </div>
  )
}

export default Guarantor
