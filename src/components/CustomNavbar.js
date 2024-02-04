import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCartShopping } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";


function CustomNavbar() {

  return (
    <div style={{ backgroundColor: "rgb(3,120,236)" }}>
      <Navbar expand="lg" style={{ minHeight: '50px' }}> {/* Adjusted the minimum height */}
        <Navbar.Brand className="ps-4 ms-4 text-light" href="/">ShopKart</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto pe-4 me-4 ">
            <Nav.Link className="text-light" href="/product/5">Product</Nav.Link>
            <Nav.Link className="text-light" href="/login"><FaUserAlt /></Nav.Link>
            <Nav.Link className="text-light" href="/cart"><FaCartShopping /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
