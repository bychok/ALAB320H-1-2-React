import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import BlogEntries from "./BlogEntries"


const Homepage = ({entries}) => {
  return (
    <div className="homepage">
        <Header/>
        <BlogEntries entries={entries}/>
        <Footer />
    </div>
  )
}
export default Homepage