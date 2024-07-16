import React from 'react'
import { useNavigate } from 'react-router-dom'

import { handleSignout } from '../utils/authUtils';

const Browse = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button className='' onClick={() => handleSignout(navigate)}>
        Sign Out
      </button>
    </div>
  )
}

export default Browse;
