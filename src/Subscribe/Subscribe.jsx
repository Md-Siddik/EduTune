import mail from "../assets/image/mail.png"

const Subscribe = () => {
    return (
        <div className="bg-gray-100">
            <div className="w-fit mx-auto flex max-sm:flex-col gap-7 py-20">
                <div className="text-right">
                    <h1 className="text-4xl font-bold">Subscribe to Newsletter</h1>
                    <p className="w-[380px] float-right my-3">Subscribe free and get the notification and latest offers of our courses.</p>
                </div>
                <div className="w-[90px] max-sm:hidden">
                    <img src={mail} alt="" />
                </div>
                <div className="w-fit max-sm:mx-auto">
                    <p className="text-[20px] font-bold mb-7">Enter Your Name & Email</p>
                    <form className="w-[265px] max-sm:w-[350px]">
                        <div className="flex flex-col gap-4 mb-4">
                            <input type="text" name="" id="" className="py-2 pl-4 rounded outline-0" placeholder="Enter your name" />
                            <input type="email" name="" id="" className="py-2 pl-4 rounded outline-0" placeholder="Enter your email address" />
                        </div>
                        <input type="submit" className="bg-orange-500 text-white py-2 px-4 rounded" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;