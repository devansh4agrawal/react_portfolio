import React from 'react'
import './Scroll.css'
const Scroll = () => {
    window.addEventListener("scroll", function(){
        const scrollUp = document.querySelector(".scrollup")
        if (this.scrollY >=560) scrollUp.classList.add("show-scroll")
        else scrollUp.classList.remove("show-scroll")
    })

  return (
    <a href="" className="scrollup">
        <i className="uil uil-arrow-up scroll_icon"></i>
    </a>
  )
}

export default Scroll