import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import LoginModal from './LoginModal'

export default function Layout() {
  return (
    <>
      <header>
        <div className="container site-header">
          <Navbar />
        </div>
      </header>
      <Outlet />
      <Footer />
      <LoginModal />
    </>
  )
}
