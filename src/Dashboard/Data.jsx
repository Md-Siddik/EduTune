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
                    <Link to={`/details/${_id}`}>
                        <button className="py-2 px-3 bg-gray-500 text-white bg-sky-500">View</button>
                    </Link>
                </div>
            </td>
            <td>
                <div className="flex items-center justify-center" onClick={handleAvailable}>
                    {
                        available === 'true' ? <FaCheck className="text-[16px] text-green-500" /> : <ImCross className="text-red-500" />
                    }
                </div>
            </td>
        </tr>
    );
};

export default Data;