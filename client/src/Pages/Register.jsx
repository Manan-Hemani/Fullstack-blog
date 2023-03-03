import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="auth">
            <h1>Register</h1>
            <form>
                <input required type="email" placeholder="example@email.com" />
                <input required type="text" placeholder="username" />
                <input required type="password" placeholder="password" />
                <button>Register</button>
                <p>There's some error!</p>
                <span>Do you have an account? <Link to="/login">Login</Link></span>
            </form>
            
        </div>
        )
}

export default Register;
