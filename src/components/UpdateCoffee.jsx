import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }
        // console.log(updatedCoffee);

        fetch(`https://coffee-store-blue.vercel.app/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedCoffee),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Scuccess!',
                        text: 'Coffee Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h2 className='text-3xl font-extrabold'>Update Coffee</h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* form row */}
                <div className='md:flex'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Coffee Name</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='Coffee Name' className='input input-bordered w-full' name='name' defaultValue={name} />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2 ml-4'>
                        <label className='label'>
                            <span className='label-text'>Available Quantity</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='Availalbe Quantity' className='input input-bordered w-full' name='quantity' defaultValue={quantity} />
                        </label>
                    </div>
                </div>
                {/* form suplier row */}
                <div className='md:flex'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Supplier</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='Supplier Name' className='input input-bordered w-full' name='supplier' defaultValue={supplier} />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2 ml-4'>
                        <label className='label'>
                            <span className='label-text'>Taste</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='taste' className='input input-bordered w-full' name='taste' defaultValue={taste}/>
                        </label>
                    </div>
                </div>
                {/* form row */}
                <div className='md:flex'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Category</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='Category' className='input input-bordered w-full' name='category' defaultValue={category} />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2 ml-4'>
                        <label className='label'>
                            <span className='label-text'>Category Details</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='Details' className='input input-bordered w-full' name='details' defaultValue={details} />
                        </label>
                    </div>
                </div>
                {/* form row */}
                <div className='mb-6'>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Photo URL</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='Photo URL' className='input input-bordered w-full' name='photo' defaultValue={photo}/>
                        </label>
                    </div>
                </div>
                <input type="submit" value='Update Coffee' className='btn btn-block' />
            </form>
        </div>
    );
};

export default UpdateCoffee;