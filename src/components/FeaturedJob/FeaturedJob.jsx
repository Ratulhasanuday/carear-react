import { MdOutlineLocationOn } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const FeaturedJob = ({ job }) => {
    const { id,logo ,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description} = job
    return (
        <div className="card card-compact border mt-8 p-4 bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title} </h2>
                <h2 className="text-base font-bold ">{company_name} </h2>
                <div className="">
                    <button className="btn mr-4 text-base font-extrabold border border-[#7E90FE] text-[#7E90FE] ">{remote_or_onsite}</button>
                    <button className="btn mr-4 text-base font-extrabold border border-[#7E90FE] text-[#7E90FE] ">{job_type}</button>
                </div>
                <div className="flex gap-4 my-4">
                    <div className="flex gap-1 text-lg font-semibold">
                        <MdOutlineLocationOn 
                    className="text-xl my-auto"/>
                    {location} </div>
                    <div className="flex gap-1  text-lg font-semibold">
                        <RiMoneyDollarCircleLine  className="text-xl my-auto" />
                        <p>Salary :</p>  {salary} </div>
                </div>
                <div className="card-actions ">
                   <Link to={`/job/${id}`}>
                   <button className="btn btn-primary bg-gradient-to-r from-[#7E90FE] to-[#9873FF] ... font-extrabold">View Details</button>
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJob;