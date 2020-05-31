import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <nav>
            <Link to="/" style={{ marginRight: 10 }}>Home</Link>
            <Link to="/login" style={{ marginRight: 10 }}>Login</Link>
            <Link to="/create" style={{ marginRight: 10 }}>Create</Link>
            <Link to="/list" style={{ marginRight: 10 }}>Listings</Link>
        </nav>

        <hr />
    </header>
);

export default Header;
