import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';


// import useFirebase from '../../Hooks/useFirebase';

const Header = () => {
    const { user, logOut } = useAuth();
    // const { user, handleLogout } = useFirebase();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Best Tour Ever</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#specialServices">Special Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/about">About</Nav.Link>
                        <Nav.Link as={HashLink} to="/adminDashboard">admin</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> : <Nav.Link as={Link} to="/login">Login</Nav.Link>

                        }
                        <Navbar.Text>  Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    <Nav className="me-auto">

                    </Nav>
                </Container>
            </Navbar>






            {/* <div className="menubar-container " fixed="top">
                <div className="menubar container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <div className="m-4">
                                <span className="name">Best Tour Ever</span>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-12">
                            <div className="menu-items text-center">
                                <ul className="d-flex align-items-end justify-content-end me-5">
                                    <li className="items p-2">
                                        <Link className="items p-2" to="/home">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="items p-2">
                                        <Link className="items p-2" to="/about">
                                            About
                                        </Link>
                                    </li>
                                    <li className="items p-2">
                                        <Link className="items p-2" to="/services">
                                            Services
                                        </Link>
                                    </li>

                                    <Link to="/adminDashboard">
                                        <button className="items btn btn-dark p-1 ">Admin</button>
                                    </Link>




                                    <Link to="/admin">
                                        <button

                                            className="items btn btn-danger p-1 "
                                        >
                                            Logout
                                        </button>
                                    </Link>

                                    <Link to="/login">
                                        <button className="items btn btn-success p-1 ">Register</button>
                                    </Link>


                                    <Link className="items" to="/admin">
                                        <li></li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default Header;