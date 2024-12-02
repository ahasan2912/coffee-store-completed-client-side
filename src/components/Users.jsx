import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    const usersData = useLoaderData();
    const [users, setUsers] = useState(usersData);
    const userDelete = (id) => {
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
                const remainingUser = users.filter(user => user._id !== id);
                setUsers(remainingUser);
              }
              fetch(`https://coffee-store-blue.vercel.app/users/${id}`, {
                method: 'DELETE'
              })
              .then(res => res.json())
              .catch(err => {
                // console.log(err.message)
              })
        });
    }
    return (
        <div>
            <h2>Number of User {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial Number</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Sign In Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, indx) => <tr key={user._id} className="hover">
                                <th>{indx + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.createdAt}</td>
                                <td>{user?.lastSignInTime}</td>
                                <td className='space-x-2'>
                                    <button onClick={() => userDelete(user?._id)} className='btn'>Delete</button>
                                    <button className='btn'>Edit</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
