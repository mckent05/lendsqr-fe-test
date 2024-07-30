import React from 'react'
import PersonalInformation from './PersonalInformation'
import EducationEmploy from './EducationEmploy'
import Socials from './Socials'
import Guarantor from './Guarantor'
import "./personal.css"
import { UserState } from '../../Store/userSlice'

interface SingleUserDetailProps {
  user: UserState | null
}

const SingleUserDetail = ({user}: SingleUserDetailProps) => {
  return (
    <div className='single__user__cont'>
      <PersonalInformation personalInfo = {user?.personalInformation} />
      <EducationEmploy education={user?.educationAndEmployment} />
      <Socials/>
      <Guarantor />
    </div>
  )
}

export default SingleUserDetail
