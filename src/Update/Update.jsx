import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {

    const allCourses = useLoaderData();
    const { _id, title, thumbnail, duration, duration_status, live_status, fees, category, description } = allCourses;

    console.log(allCourses)

    const handleUpdate = event => {
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
        fetch(`http://localhost:5000/course/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCourse)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Course Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Great'
                    })
                }
            })
    }
    return (
        <div>
            <div className="flex justify-center items-center">
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
        </div>
    );
};

export default Update;