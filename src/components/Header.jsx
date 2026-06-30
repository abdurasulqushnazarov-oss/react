import React from "react";

function Header() {
  return (
    <>
      <header className="site-header">
        <div className="container header-container">
          <a className="logo" href="index.html">
            <img src="LOGO.svg" alt="" />
          </a>
          <div className="nav-links">
            <a href="#">Home </a>
            <a href="#">About </a>
            <a href="#">Services</a>
            <a href="#">Reviews</a>
          </div>
          <div className="btn-box">
            <a className="menu-bar" href="#">
              <i class="fa-solid fa-bars"></i>
            </a>
            <button className="header-btn">Get Started</button>
          </div>
        </div>
       
      </header>
    </>
  );
}

export default Header;
