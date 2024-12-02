import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees}) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    const handleDeleteBtn = (_id) => {
        // console.log(_id)
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
                fetch(`https://coffee-store-blue.vercel.app/coffee/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(coffee => coffee._id !== _id);
                            setCoffees(remaining);
                        }
                    })
            }
        });
    }
    return (
        <div className=" flex items-center bg-base-200 shadow-xl px-5 border">
            <figure className='rounded-lg w-full'>
                <img className='w-full rounded-lg'
                    src={photo} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{quantity}</p>
                <p>{supplier}</p>
                <p>{taste}</p>
            </div>
            <div className="join join-vertical">
                <button className="btn join-item btn-primary">View</button>
                <Link to={`updateCoffee/${_id}`}>
                    <button className="btn join-item btn-accent w-full">Edit</button>
                </Link>
                <button onClick={() => handleDeleteBtn(_id)} className="btn join-item btn-warning">Delete</button>
            </div>
        </div>
    );
};

export default CoffeeCard;