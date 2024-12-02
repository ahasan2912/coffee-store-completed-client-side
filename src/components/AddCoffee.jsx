import Swal from 'sweetalert2';

const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        // console.log(newCoffee);

        fetch('https://coffee-store-blue.vercel.app/coffee', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCoffee),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Scuccess!',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h2 className='text-3xl font-extrabold'>Add Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* form row */}
                <div className='md:flex'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Coffee Name</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='Coffee Name' className='input input-bordered w-full' name='name' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2 ml-4'>
                        <label className='label'>
                            <span className='label-text'>Available Quantity</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='Availalbe Quantity' className='input input-bordered w-full' name='quantity' />
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
                            <input type="text" placeholder='Supplier Name' className='input input-bordered w-full' name='supplier' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2 ml-4'>
                        <label className='label'>
                            <span className='label-text'>Taste</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='taste' className='input input-bordered w-full' name='taste' />
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
                            <input type="text" placeholder='Category' className='input input-bordered w-full' name='category' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2 ml-4'>
                        <label className='label'>
                            <span className='label-text'>Category Details</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='Details' className='input input-bordered w-full' name='details' />
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
                            <input type="text" placeholder='Photo URL' className='input input-bordered w-full' name='photo' />
                        </label>
                    </div>
                </div>
                <input type="submit" value='Add Coffee' className='btn btn-block' />
            </form>
        </div>
    );
};

export default AddCoffee;


