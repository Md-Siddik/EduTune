import { CgMediaLive } from "react-icons/cg";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const Card = ({course}) => {
    const {id, title, thumbnail, duration, duration_status, live_status, fees, category, description, available} = course;
    return (
        <div className="card card-compact bg-base-100 rounded-lg shadow-xl max-sm:w-[330px] mx-auto">
            <figure className="relative h-[200px]">
                <div className="absolute top-3 left-1 flex items-center gap-1 text-white bg-red-500 text-[12px] uppercase px-1 rounded-sm">
                    <CgMediaLive /> {live_status}
                </div>
                <img
                    src={thumbnail}
                    className="rounded-t-xl h-full w-full"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-[15px] pb-3 text-left">{title}</h2>
                <hr />
                <div className="flex justify-between items-center">
                    <div className="font-bold py-2">
                        <p className="text-[12px]">Full Course Fees</p>
                        <p className="flex items-center text-xl text-green-600"><FaBangladeshiTakaSign />{fees}</p>
                    </div>
                    <div className="card-actions">
                        <span className="border border-black py-1 px-3 rounded">{duration} {duration_status}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;