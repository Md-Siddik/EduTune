import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

const Details = () => {

    const singleCourse = useLoaderData();

    const { _id, title, thumbnail, duration, duration_status, live_status, fees, category, description, available } = singleCourse;

    return (
        <div>
            <div className="container">
                <div className="card lg:card-side bg-base-100 shadow-xl my-24">
                    <figure className="lg:w-[45%]">
                        <img
                            src={thumbnail}
                            alt="Album"
                            className="h-full w-full" />
                    </figure>
                    <div className="card-body lg:w-[55%]">
                        <h2 className="card-title lg:text-3xl">{title}</h2>
                        <p className="py-4">{description}</p>
                        <div className="flex justify-between text-xl font-bold pb-4">
                            <p>{duration}{duration_status}</p>
                            <p className="text-red-500">{live_status}</p>
                        </div>
                        <div className="flex gap-2 text-green-500">
                            <FaBangladeshiTakaSign className="text-3xl font-bold"></FaBangladeshiTakaSign>
                            <p className="text-3xl font-bold">{fees}</p>
                        </div>
                        <div className="card-actions justify-end">
                            <Link to='/dashboard'>
                                <button className="py-4 px-8 bg-green-500 rounded-lg text-white text-xl font-bold">Back</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;