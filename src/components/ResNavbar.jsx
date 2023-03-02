import React from 'react'
import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import mainNavbarStyles from './Navbar.module.css'

function ResNavbar() {
    return (                
    <>
                <Navbar bg="lt" expand="lg" style={{padding:'0'}}>
                <nav className={mainNavbarStyles['main-nav']}>
                    <div className={mainNavbarStyles['brand-logo']}>
                        <Navbar.Brand href="#home">
                            <img src="src\assets\general\Authlogo.png" alt="" />
                        </Navbar.Brand>
                    </div>
                    <div className={mainNavbarStyles['nav-container']}>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className={mainNavbarStyles['nav-paths']}>
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">About</Nav.Link>
                                <Nav.Link href="#link2">Features </Nav.Link>
                                <Nav.Link href="#link2">
                                    <button className={mainNavbarStyles['get-started-btn']}>
                                        Get Started
                                    </button>
                                    <section className={mainNavbarStyles['register-options']}>
                                    <ul>
                                        <li>
                                            <NavLink>As an Altschooler</NavLink>
                                        </li>
                                        <li>
                                            <NavLink>
                                                As an Instructor/Mentor
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink>As a Regular Student</NavLink>
                                        </li>
                                    </ul>
                                </section>
                                </Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </nav>
            </Navbar>
     </>
    );
}

export default ResNavbar

    //     <Navbar bg="light" expand="lg">
    //     <Container>
    //       <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //       <Navbar.Collapse id="basic-navbar-nav">
    //         <Nav className="me-auto">
    //           <Nav.Link href="#home">Home</Nav.Link>
    //           <Nav.Link href="#link">Link</Nav.Link>
    //           <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //             <NavDropdown.Item href="#action/3.2">
    //               Another action
    //             </NavDropdown.Item>
    //             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //             <NavDropdown.Divider />
    //             <NavDropdown.Item href="#action/3.4">
    //               Separated link
    //             </NavDropdown.Item>
    //           </NavDropdown>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar> 
        // <>

