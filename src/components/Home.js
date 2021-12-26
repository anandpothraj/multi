import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Link to="/login">
                <button>login</button>
            </Link>
            <Link to="/register/first">
                <button>Register</button>
            </Link>
        </div>
    )
}

export default Home;
