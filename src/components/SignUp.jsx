import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, email, password)
        //createUser
        createUser(email, password)
            .then(result => {
                // console.log(result.user);
                toast.success('Successfully SignUp!');
                const createdAt = result?.user?.metadata?.creationTime;
                const newUser = { name, email, createdAt };
                
                fetch('https://coffee-store-blue.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.insertedId) {
                            // console.log('user created in db');
                            form.reset();
                        }
                    })
            })
            .catch(err => {
                // console.log(err.message);
            })
    }
    return (
        <div className='flex items-center justify-center mt-10'>
            <Toaster></Toaster>
            <div className="card bg-base-200 border w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-primary">SignUp</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
