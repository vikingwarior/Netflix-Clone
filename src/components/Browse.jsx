import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { handleSignout } from '../utils/authUtils';
import Header from './Header';

const Browse = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header/>
      <button className='' onClick={() => handleSignout(navigate)}>
        Sign Out
      </button>
    </div>
  )
}

export default Browse;
