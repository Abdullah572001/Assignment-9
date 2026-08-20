import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Service from "../component/Service";


const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Service></Service>
        </div>
    );
};

export default HomeLayout;