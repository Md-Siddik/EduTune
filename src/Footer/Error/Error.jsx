import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Error = () => {



    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='h-[400px] w-[400px] bg-[#24788F] flex justify-center items-center text-white text-center rounded-2xl'>
                <div className='text-8xl font-bold'>
                    <Typewriter
                        words={['404']}
                        loop={5}
                        cursor
                        cursorStyle='!'
                        typeSpeed={200}
                        deleteSpeed={100}
                        delaySpeed={1000}
                        onLoopDone={handleDone}
                    />
                    <h1 className='text-3xl'>Page not found</h1>
                    <Link to='/'>
                        <button className='btn text-lg'>Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;