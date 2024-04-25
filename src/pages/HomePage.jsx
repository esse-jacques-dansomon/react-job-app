import Hero from "../components/Hero.jsx";
import HomeCard from "../components/HomeCard.jsx";
import JobListings from "../components/JobListings.jsx";
import ViewAllJob from "../components/ViewAllJob.jsx";

const HomePage = () => {
    return (
       <>
           <Hero/>
           <HomeCard/>
           <JobListings isHome={true}/>
           <ViewAllJob/>
       </>
    );
}

export default HomePage;