import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import './Nav.css'

function Nav() {
  const [show, handleShow] = useState(false)
  const history = useHistory()

  function handleClickProfile() {
    history.push("/profile")
    history.go()
  }

  function handleClickHome() {
    history.push("/")
    history.go()
  }

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true)
    } else {
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar)
    return () => window.removeEventListener('scroll', transitionNavBar)
  }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img onClick={handleClickHome} className="nav__logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />

        <img
          onClick={handleClickProfile} 
          className="nav__avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
          alt=""
        />
      </div>
    </div>
  )
}

export default Nav
