import { FaHeart } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-gray-50">
            <div className="container flex max-sm:flex-col max-sm:gap-5 justify-between py-8">
                <div className="flex items-center">
                    Copyright &copy; 2022 - 2024 EduTune. All rights reserved.
                </div>
                <div className="flex items-center gap-2">
                    Made with <FaHeart className="text-red-400 text-[13px]" /> in Bangladesh
                </div>
            </div>
        </div>
    );
};

export default Footer;