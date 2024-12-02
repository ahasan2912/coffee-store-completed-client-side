import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const { singInUser } = useContext(AuthContext);
    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        //singInUser
        singInUser(email, password)
            .then(result => {
                // console.log(result.user);
                toast.success('Successfully SignUp!');
                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const loginInfo = { email, lastSignInTime };

                fetch(`https://coffee-store-blue.vercel.app/users`, {
                    method: "PATCH",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginInfo)
                })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                })

            })
            .catch(err => {
                // console.log(err.message)
            })
    }
    return (
        <div className='flex items-center justify-center mt-10'>
            <Toaster></Toaster>
            <div className="card bg-base-200 border w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSignIn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">SignIn</button>
                    </div>
                    <p>New to coffee drinker: <Link to="/signup">SignUp</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;