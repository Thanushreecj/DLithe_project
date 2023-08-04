import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const UserNav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
          <Link class="navbar-brand text-light" to="/">CREDIT CARD GENERATING SYSTEM</Link>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
             


               
            </ul>
            <div class="nav-item me-5">
                  <Link class="nav-link text-light" to="/">HOME</Link>
                </div>
                
            
          </div>
        </div>
      </nav>
    </div>
  )
}

export default UserNav;