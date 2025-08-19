import imgRoom1 from "../../../../../assets/room15.jpeg";
import imgRoom2 from "../../../../../assets/room16.jpg";
import imgRoom18 from "../../../../../assets/room5.jpg";
import imgRoom14 from "../../../../../assets/room14.jpeg";
import imgRoom16 from "../../../../../assets/room18.jpeg";
import imgRoom4 from "../../../../../assets/room4.jpeg";

import Slider from 'react-slick';
import { FaInstagram } from "react-icons/fa";
export default function SliderRooms() {
    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };

    return (
        <div className="w-10/12 mx-auto cursor-pointer py-7">
            <Slider {...settings}>
                <div className="relative group">
                    <img className="w-full h-72 object-cover" src={imgRoom1} alt="IMGRoom" />
                    <div className="absolute top-5 left-5 right-5 bottom-5 bg-slate-300 opacity-0 group-hover:opacity-50 rounded-lg transition-opacity duration-500"></div>
                    <div className="absolute top-5 left-5 right-5 bottom-5 flex items-center justify-center text-green-500 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div>
                            <FaInstagram style={{ fontSize: "50px", marginLeft: "30px" }} />
                            <h3 className="text-2xl font-bold">
                                Follow Our <br /> Instagram
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="relative group">
                    <img className="w-full h-72 object-cover" src={imgRoom2} alt="IMGRoom" />
                    <div className="absolute top-5 left-5 right-5 bottom-5 bg-slate-300 opacity-0 group-hover:opacity-50 rounded-lg transition-opacity duration-500"></div>
                    <div className="absolute top-5 left-5 right-5 bottom-5 flex items-center justify-center text-green-500 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div>
                            <FaInstagram style={{ fontSize: "50px", marginLeft: "30px" }} />
                            <h3 className="text-2xl font-bold">
                                Follow Our <br /> Instagram
                            </h3>
                        </div>
                    </div>
                </div>
                 <div className="relative group">
                    <img className="w-full h-72 object-cover" src={imgRoom4} alt="IMGRoom" />
                    <div className="absolute top-5 left-5 right-5 bottom-5 bg-slate-300 opacity-0 group-hover:opacity-50 rounded-lg transition-opacity duration-500"></div>
                    <div className="absolute top-5 left-5 right-5 bottom-5 flex items-center justify-center text-green-500 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div>
                            <FaInstagram style={{ fontSize: "50px", marginLeft: "30px" }} />
                            <h3 className="text-2xl font-bold">
                                Follow Our <br /> Instagram
                            </h3>
                        </div>
                    </div>
                </div>
                 <div className="relative group">
                    <img className="w-full h-72 object-cover" src={imgRoom18} alt="IMGRoom" />
                    <div className="absolute top-5 left-5 right-5 bottom-5 bg-slate-300 opacity-0 group-hover:opacity-50 rounded-lg transition-opacity duration-500"></div>
                    <div className="absolute top-5 left-5 right-5 bottom-5 flex items-center justify-center text-green-500 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div>
                            <FaInstagram style={{ fontSize: "50px", marginLeft: "30px" }} />
                            <h3 className="text-2xl font-bold">
                                Follow Our <br /> Instagram
                            </h3>
                        </div>
                    </div>
                </div>
                 <div className="relative group">
                    <img className="w-full h-72 object-cover" src={imgRoom14} alt="IMGRoom" />
                    <div className="absolute top-5 left-5 right-5 bottom-5 bg-slate-300 opacity-0 group-hover:opacity-50 rounded-lg transition-opacity duration-500"></div>
                    <div className="absolute top-5 left-5 right-5 bottom-5 flex items-center justify-center text-green-500 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div>
                            <FaInstagram style={{ fontSize: "50px", marginLeft: "30px" }} />
                            <h3 className="text-2xl font-bold">
                                Follow Our <br /> Instagram
                            </h3>
                        </div>
                    </div>
                </div>
                 <div className="relative group">
                    <img className="w-full h-72 object-cover" src={imgRoom16} alt="IMGRoom" />
                    <div className="absolute top-5 left-5 right-5 bottom-5 bg-slate-300 opacity-0 group-hover:opacity-50 rounded-lg transition-opacity duration-500"></div>
                    <div className="absolute top-5 left-5 right-5 bottom-5 flex items-center justify-center text-green-500 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div>
                            <FaInstagram style={{ fontSize: "50px", marginLeft: "30px" }} />
                            <h3 className="text-2xl font-bold">
                                Follow Our <br /> Instagram
                            </h3>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}