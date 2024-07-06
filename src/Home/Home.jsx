import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Course from "../Course/Course";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
    const allCourses = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <Course></Course>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;