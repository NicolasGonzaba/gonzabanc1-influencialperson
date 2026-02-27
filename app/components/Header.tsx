import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react'
import React from 'react'


const Header = () => {
  return (
    <Navbar fluid rounded>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink  href="/pages/accomplishments">
          Accomplishments
        </NavbarLink>
        <NavbarLink href="/pages/influence">Influence</NavbarLink>
        <NavbarLink href="/pages/life">Life</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  )
}

export default Header