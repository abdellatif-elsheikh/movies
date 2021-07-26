import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <>
                <div className="w-75 mx-auto py-5 d-flex flex-column justify-content-center login">
                    <form>
                        <input type="email" className="form-control my-3" />
                        <input type="password" className="form-control my-3" />
                        <button className="btn btn-primary w-100">Login</button>
                    </form>
                </div>
            </>
        )
    }
}
