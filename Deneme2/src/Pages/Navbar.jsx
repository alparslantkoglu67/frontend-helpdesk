import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo1 from '/src/assets/logo.png';
import Logo2 from '/src/assets/arvento_footerlogo.png';

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ zIndex: 1000 }}>
            <div className="container-fluid">
                <div className="navbar-content">
                    <img src={Logo1} alt="Logo" />
                </div>
                <a
                    className="navbar-brand "
                    href="/anasayfa/anasayfa"
                    style={{

                        transition: 'transform 0.5s ease-in-out',
                        transform: isSidebarOpen ? 'translateX(30%)' : 'translateX(0%)',


                    }}
                >
                    Arvento Help Desk
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div>
                    <img src={Logo2} alt="Logo" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
