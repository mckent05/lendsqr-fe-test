import React from 'react'
import "./dashboard.css"
import CardContainer from '../../components/DashBoard/CardContainer'
import UserListContainer from '../../components/DashBoard/UserListContainer'

const Dashboard = () => {
  return (
    <div className='dashboard__cont'>
      <h1 className='dashboard__cont__header'>Users</h1>
      <CardContainer />
      <UserListContainer />
    </div>
  )
}

export default Dashboard
