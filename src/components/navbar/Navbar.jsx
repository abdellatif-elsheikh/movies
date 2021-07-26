import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styles from "./navbar.module.css"

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className={`${styles.nav} navbar navbar-expand-lg navbar-dark position-fixed w-100`}>
                    <Link className={`${styles.nav_logo} navbar-brand`} to="/">Noxe</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/movies">Movies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/tv">Tv show</Link>
                            </li>
                        </ul>
                        <div className={`ml-auto right-nav d-flex justify-content-around align-items-center`}>
                            <div className={`${styles.search}`}>
                                <input type="search" placeholder="Search" name="search" />
                            </div>
                            <div className={`${styles.icons_wrapper}`}>
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-google-plus"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-youtube"></i>
                            </div>
                            <Link to="/login" className={`${styles.logout }`}>Logout</Link>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
