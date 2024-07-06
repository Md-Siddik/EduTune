import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Data = ({ course }) => {
    const { _id, title, thumbnail, duration, duration_status, live_status, fees, category, description, available } = course;

    const navigate = useNavigate()

    const handleAvailable = () => {
        const avcourse = { available: available === 'true' ? 'false' : 'true' };

        fetch(`https://edutune-server.vercel.app/course/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(avcourse),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    navigate('/dashboard');
                }
            });
    };

    const handleDelete = (_id) => {
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
                fetch(`https://edutune-server.vercel.app/course/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "The Course has been deleted.",
                                icon: "success"
                            });
                            navigate('/dashboard')
                        }
                    })
            }
        });
    }

    return (
        <tr className="border-y-[1px] border-gray-400 relative">
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div>
                            <img
                                src={thumbnail}
                                alt="Avatar Tailwind CSS Component"
                                className="max-w-[200px]"
                            />
                        </div>
                    </div>
                </div>
            </td>
            <td className="">
                <h1 className="text-[17px] font-bold">{title}</h1>
            </td>
            <td className="max-w-[600px] max-sm:hidden">{description}</td>
            <td>
                <div className="w-fit mx-auto flex gap-4">
                    <Link to={`/update/${_id}`}>
                        <button className="py-2 px-3 bg-gray-500 text-white bg-green-500">Update</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="py-2 px-3 bg-gray-500 text-white bg-red-500">Delete</button>
                    <button className="py-2 px-3 bg-gray-500 text-white bg-sky-500">View</button>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-center" onClick={handleAvailable}>
                    {
                        available === 'true' ? <FaCheck className="text-[16px] text-green-500" /> : <ImCross className="text-red-500" />
                    }
                </div>
            </td>

            {/* <div>
                <dialog id="my_modal_2" className="w-[800px]">
                    <div className="w-[180px]">

                        <div className="my-20 py-12 px-10 rounded-xl bg-gray-500 w-fit ml-2">
                            <form onSubmit={handleUpdate} method="dialog" className="w-[700px] max-sm:w-[350px] flex flex-col justify-center">
                                <div className="flex flex-col gap-4">
                                    <div className="flex gap-4 mb-4">
                                        <input type="text" name="title" defaultValue={title} id="" className="py-2 pl-4 rounded outline-0 w-full" placeholder="Title" />
                                        <input type="text" name="thumbnail" defaultValue={thumbnail} id="" className="py-2 pl-4 rounded outline-0 w-full" placeholder="Thumbnail" />
                                    </div>
                                    <div className="flex gap-4 mb-4">
                                        <input type="number" name="duration" defaultValue={duration} id="" className="py-2 pl-4 rounded outline-0 w-full" placeholder="Duration" />
                                        <select className="py-2 pl-4 rounded outline-0 w-full" name="duration_status" defaultValue={duration_status} id="">
                                            <option value="Hours">Hours</option>
                                            <option value="Days">Days</option>
                                            <option value="Weeks">Weeks</option>
                                            <option value="Months">Months</option>
                                        </select>
                                    </div>
                                    <div className="flex gap-4 mb-4">
                                        <select className="py-2 pl-4 rounded outline-0 w-full" name="live_status" defaultValue={live_status} id="">
                                            <option value="Live">Live</option>
                                            <option value="Recorded">Recorded</option>
                                        </select>
                                        <input type="number" name="fees" defaultValue={fees} id="" className="py-2 pl-4 rounded outline-0 w-full" placeholder="Fees" />
                                    </div>
                                    <div className="flex gap-4 mb-4">
                                        <select className="py-2 pl-4 rounded outline-0 w-full" name="category" defaultValue={category} id="">
                                            <option value="spoken">Spoken</option>
                                            <option value="startup">Start up</option>
                                            <option value="presentation">Presentation</option>
                                            <option value="math">Math</option>
                                            <option value="admission">Admission</option>
                                        </select>
                                    </div>
                                    <div>
                                        <textarea className="w-full h-[120px] outline-0 pl-4 py-2" name="description" defaultValue={description} placeholder="Description"></textarea>
                                    </div>
                                </div>
                                <div className="w-fit mx-auto">
                                    <button type="submit" className="bg-orange-500 text-white py-3 px-6 mt-8 text-xl font-bold rounded">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div> */}
        </tr>
    );
};

export default Data;