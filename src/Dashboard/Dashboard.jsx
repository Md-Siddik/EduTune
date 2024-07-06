import Swal from "sweetalert2";
import Data from "./Data";
import { useLoaderData, useNavigate } from "react-router-dom";

const Dashboard = () => {

    const allCourses = useLoaderData();
    const navigate = useNavigate();

    const category = allCourses?.filter(course => course.category)
    // console.log(category)
    
    const handleAddCourse = event => {
        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const thumbnail = form.thumbnail.value;
        const duration = form.duration.value;
        const duration_status = form.duration_status.value;
        const live_status = form.live_status.value;
        const fees = form.fees.value;
        const category = form.category.value;
        const description = form.description.value;
        const available = true;

        const newCourse = { title, thumbnail, duration, duration_status, live_status, fees, category, description, available };

        // Send data to the server
        fetch('http://localhost:5000/course', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCourse)
        })
            .then(res => res.json())
            .then(data => {
                document.getElementById('my_modal_3').close();
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Course Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Great'
                    })
                    navigate('/dashboard')
                }
            })
    }

    return (
        <div className="bg-gray-100">
            <div className="container flex justify-center overflow-x-auto">
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className="text-lg text-black">
                                <th>Thumbnail</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th></th>
                                <th>Available Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allCourses?.map(course => <Data key={course.id} course={course}></Data>)
                            }
                        </tbody>
                    </table>

                    <div className="flex justify-between items-center py-8">
                        <h1 className="text-2xl font-bold">Add New Course</h1>
                        <button className="py-2 px-8 bg-blue-500 text-white text-xl font-bold" onClick={() => document.getElementById('my_modal_3').showModal()}>Add</button>
                    </div>
                </div>
                <div>
                    <dialog id="my_modal_3" className="w-[800px]">
                        <div className="w-[180px]">

                            <div className="my-20 py-12 px-10 rounded-xl bg-gray-500 w-fit ml-2">
                                <form onSubmit={handleAddCourse} method="dialog" className="w-[700px] max-sm:w-[350px] flex flex-col justify-center">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex gap-4 mb-4">
                                            <input type="text" name="title" id="" className="py-2 pl-4 rounded outline-0 w-full" placeholder="Title" />
                                            <input type="text" name="thumbnail" id="" className="py-2 pl-4 rounded outline-0 w-full" placeholder="Thumbnail" />
                                        </div>
                                        <div className="flex gap-4 mb-4">
                                            <input type="number" name="duration" id="" className="py-2 pl-4 rounded outline-0 w-full" placeholder="Duration" />
                                            <select className="py-2 pl-4 rounded outline-0 w-full" name="duration_status" id="">
                                                <option value="Hours">Hours</option>
                                                <option value="Days">Days</option>
                                                <option value="Weeks">Weeks</option>
                                                <option value="Months">Months</option>
                                            </select>
                                        </div>
                                        <div className="flex gap-4 mb-4">
                                            <select className="py-2 pl-4 rounded outline-0 w-full" name="live_status" id="">
                                                <option value="Live">Live</option>
                                                <option value="Recorded">Recorded</option>
                                            </select>
                                            <input type="number" name="fees" id="" className="py-2 pl-4 rounded outline-0 w-full" placeholder="Fees" />
                                        </div>
                                        <div className="flex gap-4 mb-4">
                                        <select className="py-2 pl-4 rounded outline-0 w-full" name="category" id="">
                                                <option value="pre_schooling">Pre-Schooling</option>
                                                <option value="kids_course">Kid`s Courses</option>
                                                <option value="admission">Admission</option>
                                                <option value="moral_education">Moral Education</option>
                                                <option value="skill_develop">Skill Develop</option>
                                            </select>
                                        </div>
                                        <div>
                                            <textarea className="w-full h-[120px] outline-0 pl-4 py-2" name="description" placeholder="Description"></textarea>
                                        </div>
                                    </div>
                                    <div className="w-fit mx-auto">
                                        <button type="submit" className="bg-orange-500 text-white py-3 px-6 mt-8 text-xl font-bold rounded">Add Course</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;