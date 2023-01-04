import React from 'react'

function LogoBox() {
  return (
    <div
      className="logo-box wow fadeInDown"
      data-wow-duration="2s"
      data-wow-delay="0.5s"
    >
      <a href="index.html">
        <img
          src="images/logo.png"
          alt=""
          className="img-responsive center-block"
        />
      </a>
    </div>
  )
}

export default LogoBox
