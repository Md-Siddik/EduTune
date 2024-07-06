import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Course = () => {
    const allCourses = useLoaderData();
    const availableCourse = allCourses?.filter(course => course.available == 'true');
    // console.log(availableCourse);
    return (
        <div>
            <div className='container text-center'>
                <h1 className="text-3xl font-bold py-9 lg:mt-16">এডুটিউনের কোর্স</h1>
                <div className="grid lg:grid-cols-4 gap-5 ">
                    {
                        availableCourse?.map(course => <Card key={course.id} course={course}></Card>)
                        
                    }
                </div>
                <button className="bg-orange-500 text-white text-[13px] font-bold rounded py-2 px-5 my-16">সমস্ত কোর্স দেখান</button>
            </div>
        </div>
    );
};

export default Course;