import { useLoaderData, useParams } from "react-router-dom"
import { MdOutlineEmail, } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineWebAsset } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../utility/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);
    const showToastMessage = () => {
        saveJobApplication(idInt);
        toast.success("Success Notification !");
    };
    return (

        <div>
            <div className="grid gap-4 grid-cols-6">
                <div className="md:col-span-4">
                    <h2 className="text-base mb-4 font-semibold">
                        <span className="font-extrabold">Job Description : </span>
                        {job.job_description}
                    </h2>
                    <h2 className="text-base font-semibold">
                        <span className="font-extrabold">Job Responsibility : </span>
                        {job.job_responsibility}
                    </h2>
                    <h2 className="text-base font-semibold my-4">
                        <span className="font-extrabold my-4">Educational Requirements :
                        </span><br /> <br />
                        {job.educational_requirements}</h2>
                    <h2 className="text-base font-semibold  my-4">
                        <span className="font-extrabold ">Experincess : </span>
                        <br /> <br />
                        {job.experiences}
                    </h2>
                </div>
                <div className=" md:col-span-2">
                    <h2></h2>
                    <div className="border bg-[#a0abf0] text-black p-5">
                        <h2 className="text-xl font-bold">Job Details</h2>
                        <hr className="text-black" />
                        <p className=" flex text-xl font-medium">
                            <RiMoneyDollarCircleLine className="my-auto" />
                            <span>Salary :</span>{job.salary} </p>
                        <div className="flex text-xl font-medium">
                            <MdOutlineWebAsset className="h-6 w-8" />
                            <p>
                                <span>Job Title :</span> {job.job_title}</p>

                        </div>

                        <h2 className="text-xl font-bold">Contact Information</h2>

                        <hr />

                        <p className="flex text-xl font-medium">
                            <FiPhone className="my-auto" />
                            <span>Phone:</span>{job.contact_information.phone}</p>
                        <p className="flex text-xl font-medium">
                            <MdOutlineEmail className="my-auto" />
                            <span>Email:</span>{job.contact_information.email}</p>
                        <div className="flex text-xl font-medium">
                            <IoLocationOutline className="w-8 h-8" />
                            <p>
                                <span className="font-bold">Address:</span>{job.contact_information.address}
                            </p>
                        </div>

                    </div>
                    
                    
                        <button onClick={showToastMessage} className="btn mt-6 w-full btn-primary bg-gradient-to-r from-[#7E90FE] to-[#9873FF] ... ">Apply Now</button>
                    
                </div>
                        <ToastContainer />
            </div>
        </div>
    );
};

export default JobDetails;