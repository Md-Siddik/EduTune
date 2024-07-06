import { useEffect, useState } from "react";

const useUserInfo = () => {
    const [userData, setUserData] = useState();

    useEffect(() => {
        fetch('https://edutune-server.vercel.app/user')
            .then((res) => res.json())
            .then((data) => {
                // const [singleUser] = data;
                setUserData(data);
            })
    }, [])
    return userData;
};

export default useUserInfo;