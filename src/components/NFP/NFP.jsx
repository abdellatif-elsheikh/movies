import React, { Component } from 'react';
import styles from "./NFP.module.css";
import {Link} from "react-router-dom"

export default class NFP extends Component {
    render() {
        return (
            <>
                <div className={`${styles.body}`}>
                    <div className={`${styles.div}`}>
                        <aside className={`${styles.aside}`}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png" alt="404 Image" />
                        </aside>
                        <main className={`${styles.main}`}>
                            <h1>Sorry!</h1>
                            <p>
                                Either you aren't cool enough to visit this page or it doesn't exist <em>. . . like your social life.</em>
                            </p>
                            <Link className={`${styles.button}`} to="/home">You can go now!</Link>
                        </main>
                    </div>
                </div>
            </>
        )
    }
}
