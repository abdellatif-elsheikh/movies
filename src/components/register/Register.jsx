import React, { Component } from 'react'

export default class Register extends Component {
    user_data = {
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    }

    getFormData = ({target})=> {
        this.user_data[target.name] = target.value
        console.log(this.user_data)
    }

    render() {
        return (
            <>
                <div className="w-75 mx-auto py-5 d-flex flex-column justify-content-center register">
                    <form>
                        <input onChange={this.getFormData} type="text" name="first_name" className="form-control mt-3" placeholder="First name" />
                        <input onChange={this.getFormData} type="text" name="last_name" className="form-control mt-3" placeholder="Last name" />
                        <input onChange={this.getFormData} type="email" name="email" className="form-control mt-3" placeholder="Email" />
                        <input onChange={this.getFormData} type="password" name="password" className="form-control mt-3" placeholder="Password" />
                        <button className="btn btn-primary mt-3 w-100">Signup</button>
                    </form>
                </div>
            </>
        )
    }
}
