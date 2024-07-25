
import Header from './Header';

import { handleSignout } from '../utils/authUtils';

const Browse = () => {
  return (
    <div>
      <Header/>
      <button className='' onClick={() => handleSignout()}>
        Sign Out
      </button>
    </div>
  )
}

export default Browse;