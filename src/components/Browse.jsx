
import Header from './Header';
import AuthHeader from "./AuthHeader"

import { handleSignout } from '../utils/authUtils';

const Browse = () => {
  return (
    <div>
      <AuthHeader/>
      <Header/>
      <button className='' onClick={() => handleSignout()}>
        Sign Out
      </button>
    </div>
  )
}

export default Browse;
