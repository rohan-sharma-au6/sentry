import React from 'react';
import { Link } from 'react-router-dom';

const jobList = ({ job, handleClick, data }) => {
    const tags = [job.role, job.level]

    //console.log(data)

    if (job.languages) {
        tags.push(...job.languages)
    }
    if (job.tools) {
        tags.push(...job.tools)
    }
    return (
        <div className={`flex flex-col bg-white shadow-md mx-10 my-16 p-6 rounded ${job.featured && 'border-l-4 border-purple-500 border-solid'} sm:flex-row`}>
            <div>
                <img className="-mt-16 w-20 h-20 sm:my-0 sm:h-24 sm:w-24" src={job.logo} alt={job.company} />
            </div>
            <div className="flex flex-col justify-between ml-4">
                <h3 className="font-bold text-l text-purple-500 ">{job.company}
                    {job.new === true ? <span className="bg-purple-500 text-purple-100 font-bold rounded-full m-2 py-1 px-2 text-sm">NEW!</span> : ""}
                    {job.featured === true ? <span className="bg-gray-800 text-white font-bold rounded-full m-2 py-1 px-2 text-sm"> FEATURED</span> : null}</h3>
                <h2 className="font-bold text-xl my-2 sm:my-0">{job.position}</h2>
                <p className="text-gray-700 text-xsm">{job.postedAt} • {job.contract} • {job.location} • <Link className="text-white bg-purple-600 font-bold mr-4 mb-4 p-2 cursor-pointer rounded sm:mb-0" to={`/job/${job.id}`}>Details</Link></p>
            </div>
            <div className="  flex flex-wrap text-sm items-center mt-4 mx-4 pt-4 border-t-2 border-gray-500 border-solid sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0">

                {
                    tags ? tags.map(lan => <span key={lan} onClick={() => handleClick(lan)} className="text-purple-500 bg-purple-200 font-bold mr-4 mb-4 p-2 cursor-pointer rounded sm:mb-0">{lan}</span>) : ""
                }
            </div>



        </div>
    );
};

export default jobList;