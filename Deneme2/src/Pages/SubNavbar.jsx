import React from 'react';

const SubNavbar = ({ subnavbarName, isSidebarOpen }) => {
    return (

        <nav
            className={`navbar ${isSidebarOpen ? 'subnavbaropen' : 'subnavbarclose'} navbar-expand-lg navbar-light fixed-top`}
        >

            <h6>{subnavbarName}</h6>

        </nav>

    );
};

export default SubNavbar;
