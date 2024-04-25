// import jobs from "../jobs.json";
import JobCard from "./JobCard.jsx";
import {useState, useEffect}     from "react";
import Spinner from "./Spinner.jsx";
// eslint-disable-next-line react/prop-types
const JobListings = ({isHome=true}) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
           try {
                const api = `/api/jobs${isHome ? '?_limit=3' : ''}`;
                const response = await fetch(api);

                const data = await response.json();
                setJobs( data);
           }catch (error) {
               console.error('Error fetching jobs', error);
           }
           finally {
               setLoading(false);
           }
        }

        fetchJobs();
    }, []);

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {
                        isHome ? 'Featured Jobs' : 'Browse Jobs'
                    }
                </h2>

                    {
                        loading ? <Spinner  /> : (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {( jobs.map((job) => (<JobCard key={job.id} job={job}/>))) }
                            </div>)
                    }

            </div>
        </section>
    );
}

export default JobListings;