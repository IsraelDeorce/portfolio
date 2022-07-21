import { Outlet } from 'react-router-dom'
import PortfolioHeader from './PortfolioHeader/PortfolioHeader'
import PortfolioSidebar from './PortfolioSidebar/PortfolioSidebar'
import BlogHeader from './BlogHeader/BlogHeader'
import BlogSidebar from './BlogSidebar/BlogSidebar'

function Navbar({ isBlogPage = false }) {
  if (isBlogPage) {
    return (
      <>
        <BlogHeader />
        <BlogSidebar />
        <Outlet />
      </>
    )
  }
  return (
    <>
      <PortfolioHeader />
      <PortfolioSidebar />
      <Outlet />
    </>
  )
}

export default Navbar
