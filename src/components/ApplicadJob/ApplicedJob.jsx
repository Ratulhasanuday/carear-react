const ApplicedJob = ({ job }) => {
    return (
        <div className="border mt-4 grid grid-cols-3 justify-between p-4">
            <div className="my-auto">
                <img src={job.logo} alt="" />
            </div>
            <div>
                <h2 >{job.job_title}</h2>
                <h2>{job.job}</h2>
                <div className="my-auto">
                    <button className="btn mr-4 text-base font-extrabold border border-[#7E90FE] text-[#7E90FE] ">{job.remote_or_onsite}</button>
                    <button className="btn mr-4 text-base font-extrabold border border-[#7E90FE] text-[#7E90FE] ">{job.job_type}</button>
                </div>
            </div>
            <div className="text-end my-auto">
            <button className="btn">View Details</button>
            </div>
        </div>
    );
};

export default ApplicedJob;