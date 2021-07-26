import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer className="py-4 bg-transparent d-flex align-items-center justify-content-center flex-column">
                    <div className="icons_wrapper">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-google-plus"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-youtube"></i>
                    </div>
                    <p>copyright &copy; 2021 all rights reserved </p>
                </footer>
            </>
        )
    }
}
