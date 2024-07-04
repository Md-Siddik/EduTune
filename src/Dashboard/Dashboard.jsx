
const Dashboard = () => {
    return (
        <div className="bg-gray-100">
            <div className="container flex justify-center">
                <div className="my-20 py-12 px-10 rounded-xl bg-gray-500">
                    <p className="text-[40px] font-bold mb-7 text-center text-white">Dashboard</p>
                    <form className="w-[800px] max-sm:w-[350px] flex flex-col justify-center">
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-4 mb-4">
                                <input type="text" name="title" id="" className="py-2 pl-4 rounded outline-0 w-full" placeholder="Title" />
                                <select className="py-2 pl-4 rounded outline-0 w-full" name="live_status" id="">
                                    <option value="live">Live</option>
                                    <option value="recorded">Recorded</option>
                                </select>
                            </div>
                            <div className="flex gap-4 mb-4">
                                <input type="text" name="duration" id="" className="py-2 pl-4 rounded outline-0 w-full" placeholder="Duration" />
                                <input type="number" name="fees" id="" className="py-2 pl-4 rounded outline-0 w-full" placeholder="Fees" />
                            </div>
                            <div>
                                <textarea className="w-full h-[120px] outline-0 pl-4 py-2" placeholder="Description"></textarea>
                            </div>
                        </div>
                        <div className="w-fit mx-auto">
                            <input type="submit" className="bg-orange-500 text-white py-3 px-6 mt-8 text-xl font-bold rounded" value="Add New Class" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;