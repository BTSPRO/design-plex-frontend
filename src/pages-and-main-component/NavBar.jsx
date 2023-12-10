import React, { useEffect, useState } from 'react'
import '../styles/navbar.css'
import NavbarBg from '../assets/navbar-bg-img.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';




const NavBar = () => {
    const [above700, setAbove700] = useState(() => {
        const storedValue = localStorage.getItem('above830');
        return storedValue ? JSON.parse(storedValue) : window.innerWidth > 830;
    });

    useEffect(() => {
        const handleResize = () => {
            const isAbove830 = window.innerWidth > 830;
            setAbove700(isAbove830)

            localStorage.setItem('above830', JSON.stringify(isAbove830));
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [])


    return (
        <>
            {above700 ? (
                <div className='flex justify-center items-center'>
                    <div className='relative pt-14'>
                        <div className='flex flex-col justify-center items-center' style={{width: '98vw'}}>
                            <div className='z-10 nav-somethign flex w-10/12 justify-between items-center'>
                                <div className='flex w-full justify-around'>
                                    <p className='text-xl font-medium cursor-pointer'>Services</p>
                                    <p className='text-xl font-medium cursor-pointer'>Our work</p>
                                    <p className='text-xl font-medium cursor-pointer'>Review</p>
                                </div>
                                <p className='text-4xl font-bold cursor-pointer'>Dezign<span className='font-extrabold primary-text'>Plex</span></p>
                                <div className='flex w-full justify-around'>
                                    <p className='text-xl font-medium cursor-pointer'>FAQs</p>
                                    <p className='text-xl font-medium cursor-pointer'>Contact</p>
                                    <p className='text-xl font-medium cursor-pointer'>Portfolio</p>
                                </div>
                            </div>
                            <img className='relative mx-20 bottom-20 h-[5.5rem] navbar-img' src={NavbarBg} alt=" " />
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <Navbar expand={false} className="bg-black mb-3" data-bs-theme="dark">
                        <Container fluid className='py-2 px-4'>
                            <Navbar.Brand href="#" className='font-bold'>
                                Dezign<span className='font-extrabold primary-text'>Plex</span>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-false`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-false`}
                                placement="end"
                            >
                                <Offcanvas.Header className='bg-black' data-bs-theme="dark" closeButton>
                                    <Offcanvas.Title className='text-white font-bold' id={`offcanvasNavbarLabel-expand-false`}>
                                        Dezign<span className='font-extrabold primary-text'>Plex</span>
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body className='bg-black'>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Nav.Link as={Link} to="/">Services</Nav.Link>
                                        <Nav.Link as={Link} to="/">Our Work</Nav.Link>
                                        <Nav.Link as={Link} to="/">Review</Nav.Link>
                                        <Nav.Link as={Link} to="/">FAQs</Nav.Link>
                                        <Nav.Link as={Link} to="/">Contact</Nav.Link>
                                        <Nav.Link as={Link} to="/">Portfolio</Nav.Link>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                </>
            )}
        </>
    )
}

export default NavBar