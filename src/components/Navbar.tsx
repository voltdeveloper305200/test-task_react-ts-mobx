import React from 'react';

interface NavbarProps {
    appTitle: string;
}

const Navbar:React.FC<NavbarProps> = ({appTitle}) => {
    return (
        <nav>
            <div className="nav-wrapper teal">
                <a href="/" className="brand-logo center">{appTitle}</a>
            </div>
        </nav>
    );
}

export default Navbar;