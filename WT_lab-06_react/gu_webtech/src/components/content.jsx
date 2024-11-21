import React from 'react'
import Footer from './footer'
const content = () => {
const name = "ahsan"
const lab = "webTech"  
return (
  <div className="cont">
    <h4>
      This is {name}'s 6th {lab}-lab assignment
    </h4>
    <Footer/>
  </div>
);
}

export default content