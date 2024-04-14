import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localStorage";
// import ApplicedJob from "../ApplicadJob/ApplicedJob";
const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([])
    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite') {
            const onsitJobs = appliedJobs.filter(job => job.remote_or_onsite = 'Onsite');
            setDisplayJobs(onsitJobs);
        }
    }
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobApplied.push(job)
                }
            }
            setAppliedJobs(jobApplied);
            setDisplayJobs(jobApplied);
            //  const jobApplied=jobs.filter(job=>storedJobIds.includes(job.id))   
            // console.log(jobs, jobApplied, storedJobIds);
        }
    }, [jobs])
    return (
        <div>
            <h2>I applied this job {appliedJobs.length}
            </h2>
            <details className="dropdown mb32">
                <summary className="m1 btn">Open Or Close</summary>
                <ul className="p2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>all</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>onsite</a></li>
                </ul>
            </details>
            <div>
                {
                    displayJobs.map(
                        job => <li key={job.id}>
                            <span>{job.job_title} {job.company_name} :{job.remote_or_onsite} </span>
                        </li>
                    )
                }
            </div>
        </div>
    );
};

export default AppliedJobs;