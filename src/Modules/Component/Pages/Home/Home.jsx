import About from "../ComponentShere/About/About.jsx";
import Enjoyable from "../ComponentShere/Enjoyable/Enjoyable.jsx";
import Flxyland from "../ComponentShere/Flxyland/Flxyland.jsx";
import HeaderHome from "../ComponentShere/HeaderHome/HeaderHome.jsx";
import Rooms from "../ComponentShere/Rooms/Rooms.jsx";
import Servicess from "../ComponentShere/Services/Servicess.jsx";
import SliderRooms from "../ComponentShere/SliderRooms/SliderRooms.jsx";
import Staff from "../ComponentShere/Staff/Staff.jsx";
import Discound from './../ComponentShere/Discound/Discound';
import Feedback from './../ComponentShere/Feedback/Feedback';

export default function Home() {
    return (
        <>
         
           <HeaderHome/>
           <About/>
           <Rooms/>
           <Servicess/>
           <Enjoyable/>
           <Discound/>
           <Feedback/>
           <Staff/>
           <Flxyland/>
           <SliderRooms/>
          

        </>
    )
}
