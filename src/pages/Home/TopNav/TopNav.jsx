import { FaPhone } from "react-icons/fa";
import { MdPinDrop } from "react-icons/md";
import { PiNewspaperClippingFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import './TopNav.css'

const TopNav = () => {
    return (
        <section className="flex justify-end text-white w-full" id="topNav">
            {/* <div className="" > */}

                <div className="gap-2" id="Custom-width">
                    <p className="mt-4 flex items-center p-2 font-bold text-xs hover:text-mainColor"><FaPhone className='inline mr-2 text-xs' />CALL US NOW +61-2-123-1234</p>
                    <p className="mt-4 h-4 border-2"></p>
                    <p className="mt-4 flex items-center p-2 font-bold text-xs hover:text-mainColor"><PiNewspaperClippingFill className='inline mr-2 text-sm'/><Link to="appointment">APPOINTMENT</Link> </p>
                    <p className="mt-4 h-4 border-2"></p>
                    <p className="mt-4 mr-2 flex items-center p-2 font-bold text-xs hover:text-mainColor"><MdPinDrop className='inline mr-2 text-sm' /> FIND US ON MAP </p>
                </div>

            {/* </div> */}
        </section>
    );
};

export default TopNav;