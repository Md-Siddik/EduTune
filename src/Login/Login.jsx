import { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {

    const [userData] = useLoaderData();
    const navigate = useNavigate();

    const { _id, email, phone, password, user } = userData;

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;

        const emailPhone = form.emailPhone.value;
        const getPassword = form.password.value;

        const userLogin = { user: user === 'true' ? 'false' : 'true' };

        fetch(`http://localhost:5000/user/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userLogin),
        })
            .then((res) => res.json())
            .then((data) => {
                if (emailPhone == email || emailPhone == phone) {
                    if (getPassword == password) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Login Successful',
                            icon: 'success',
                            confirmButtonText: 'Great'
                        })
                        navigate('/dashboard');
                    }
                    else {
                        Swal.fire({
                            title: 'Faild!',
                            text: 'Incorrect Password',
                            icon: 'error',
                            confirmButtonText: 'Back'
                        })
                    }
                }
                else {
                    Swal.fire({
                        title: 'Faild!',
                        text: 'Incorrect Email of Phone number',
                        icon: 'error',
                        confirmButtonText: 'Back'
                    })
                }
            });



        // fetch(`http://localhost:5000/user/${id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(userStatus)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //     })


    }

    return (
        <div className="bg-gray-100">
            <div className="container flex justify-center py-24">
                <div className="py-20 px-10 border-[2px] border-orange-500 bg-gray-200 rounded-xl">
                    <p className="text-[40px] font-bold mb-7 text-center">Login</p>
                    <form onSubmit={handleLogin} className="w-[350px] max-sm:w-[350px] text-center">
                        <div className="flex flex-col gap-4 mb-4">
                            <input type="text" name="emailPhone" required className="py-2 pl-4 rounded outline-0" placeholder="Email or Phone number" />
                            <input type="email" name="password" required className="py-2 pl-4 rounded outline-0" placeholder="Password" />
                        </div>
                        <input type="submit" className="bg-orange-500 text-white py-2 px-4 font-bold rounded" value="Login" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;