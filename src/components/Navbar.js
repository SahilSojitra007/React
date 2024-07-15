import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    // Determine the title text based on the mode
    const titleText = props.mode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.Title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.abouttext}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} ms-auto`}>
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} title={titleText} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{titleText}</label>
                    </div>
                </div>
            </div>
        </nav>
    );
}
