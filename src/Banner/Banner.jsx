import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import bannerImage from "../assets/image/banner.png"

const Banner = () => {

    const navLinks = <>
        <li><NavLink to="">টেস্ট</NavLink></li>
        <li><NavLink to="">কোর্স</NavLink></li>
        <li><NavLink to="">বাচ্চাদের কোর্স</NavLink></li>
        <li><NavLink to="">মস্তিষ্কের বিকাশ</NavLink></li>
        <li><NavLink to="">পেশাদার কোর্স</NavLink></li>
    </>

    return (
        <div className="bg-gray-100">
            <div className="flex max-sm:flex-col lg:container">
                <div className="lg:w-1/2 max-sm:w-fit lg:px-10 lg:py-20 max-sm:py-16 mx-auto">
                    <img src={bannerImage} alt="Image" className="lg:min-w-[480px] max-sm:w-[450px] mx-auto" />
                </div>
                <div className="lg:w-1/2 p-10 max-sm:pb-16">
                    <h2 className="text-[18px] font-bold text-orange-500">এডুকেশন উইথ কেয়ার</h2>
                    <h1 className="text-[28px] max-sm:text-[24px] font-bold pr-24">সেরা প্রশিক্ষকদের সাথে আপনার শিক্ষা টিউন করুন</h1>
                    <p className="pr-4 my-4">একাডেমিক থেকে দক্ষতা উন্নয়নে এডুটিউন আছে আপনার শিক্ষকে আরও সহজ করতে। শিক্ষারথীদের গাণিতিক, মানসিক, প্রযুক্তিগত এবং ভাশাগত দক্ষতা বৃদ্ধি করে তাদেরকে চতুর্থ শিল্প বিপ্লবের একজন যোগ্য নাগরিক হিসাবে গড়ে তোলাই আমাদের প্রধান লক্ষ্য।</p>
                    <div>
                        <form className="flex items-center pl-4 join border bg-white">
                            <IoSearch />
                            <input type="text" className="w-full text-[12px] px-2 py-3 outline-0" placeholder="আপনার কোর্সের কীওয়ার্ড" />
                            <input type="submit" className="px-3 py-3 text-[12px] bg-orange-500 text-white" value="সার্চ কোর্স" />
                        </form>
                    </div>
                    <h3 className="text-[12px] my-6">সবচেয়ে জনপ্রিয়ঃ</h3>
                    <div>
                        <ul className="flex gap-4 text-[12px] underline">
                            {navLinks}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;