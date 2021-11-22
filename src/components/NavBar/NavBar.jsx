import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PortfolioHeader from './PortfolioHeader/PortfolioHeader'
import PortfolioSidebar from './PortfolioSidebar/PortfolioSidebar'
import BlogHeader from './BlogHeader/BlogHeader'
import BlogSidebar from './BlogSidebar/BlogSidebar'

function Navbar() {
  const location = useLocation()
  const [isBlogPage, setIsBlogPage] = useState(false)

  useEffect(() => {
    location.pathname.includes('blog') ? setIsBlogPage(true) : setIsBlogPage(false)
  }, [location.pathname])

  if (isBlogPage) {
    return (
      <>
        <BlogHeader />
        <BlogSidebar />
      </>
    )
  }
  return (
    <>
      <PortfolioHeader />
      <PortfolioSidebar />
    </>
  )
}

export default Navbar
