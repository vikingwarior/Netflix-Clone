import { BrowserRouter, Outlet } from 'react-router-dom'
import AuthHeader from './AuthHeader'

const Wrapper = () => {
  return (
    <div>
      <AuthHeader/>
      <Outlet/>
    </div>
  )
}

export default Wrapper;