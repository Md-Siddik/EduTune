
const Login = () => {
    return (
        <div className="bg-gray-100">
            <div className="container flex justify-center py-24">
                <div className="py-20 px-10 border-[2px] border-orange-500 bg-gray-200 rounded-xl">
                    <p className="text-[40px] font-bold mb-7 text-center">Login</p>
                    <form className="w-[350px] max-sm:w-[350px] text-center">
                        <div className="flex flex-col gap-4 mb-4">
                            <input type="text" name="" id="" className="py-2 pl-4 rounded outline-0" placeholder="Email or Phone number" />
                            <input type="email" name="" id="" className="py-2 pl-4 rounded outline-0" placeholder="Password" />
                        </div>
                        <input type="submit" className="bg-orange-500 text-white py-2 px-4 font-bold rounded" value="Login" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;