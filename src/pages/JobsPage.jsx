import JobListings from "../components/JobListings.jsx";

export const JobsPage = () => {
    return (
        <>
            <section className="bg-blue-50 py-4">
                <div className="container mx-auto px-4">
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                            placeholder="Filter jobs..."
                        />
                    </div>
                </div>
            </section>

            <JobListings isHome={false} />
        </>
    )
}

export default JobsPage;