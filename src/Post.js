import React from 'react';

const Post = () => {
    return (
        <div className="bg-white mx-auto my-16 " style={{width:"700px"}}>
            <h1 className="mx-auto text-center  text-xl">Job Creation</h1>
            <br/>
            <h1 className="mx-12">Company Info</h1>
            <div className=" mx-12 flex flex-row p-8">
                <input className="mx-1  p-2 border-b-2 border-grey-400 hover:bg-gray-100 focus:border-blue-400" placeholder="Company Name"/>
                <input className="mx-20 p-2 border-b-2 border-grey-400 hover:bg-gray-100 focus:border-blue-400" placeholder="Address"/>
            </div>
            <input className="mx-20 mb-8  p-2 border-b-2 border-grey-400 hover:bg-gray-100 focus:border-blue-400" placeholder="Overview"/>
            <h1 className="mx-12">Job Info</h1>
            <textarea style={{width:"550px",height:"100px", border:"#ccc 2px solid", marginLeft:"70px"}}/>
            <div className=" mx-12 flex flex-row p-8">
                <select className="text-gray-500 mx-10" placeholder="Level">
                    <option className="text-gray-500" disabled selected>Level</option>
                    <option>Junior</option>
                    <option>Midweight</option>
                    <option>senior</option>
                </select>
                <select className="text-gray-500 mx-10" placeholder="Level">
                    <option className="text-gray-500" disabled selected>Experience</option>
                    <option>Junior</option>
                    <option>Midweight</option>
                    <option>senior</option>
                </select>
                <select className="text-gray-500 mx-10" placeholder="Level">
                    <option className="text-gray-500" disabled selected>Contract</option>
                    <option>Part-Time</option>
                    <option>Full-Time</option>
                    <option>Contract</option>
                </select>
            </div>
                <h1 className="mx-12">Job Overview</h1>
                <br/>
                <h1 className="mx-12">Languages</h1>
                <input className="mx-20 my-4 h-10 w-200 border-gray-500 border-2 border-solid w-100 "  style={{width:"80%"}} />
                <h1 className="mx-12">Tools</h1>
                <input className="mx-20 my-4 h-10 w-200 border-gray-500 border-2 border-solid w-100 "  style={{width:"80%"}} />
                

                <div className="text-white text-center m-10 mb-10 mx-8 my-12 bg-purple-600 font-bold mr-4 mb-10 p-2 cursor-pointer rounded sm:mb-0" to="">CREATE JOB</div>
                <br/>
        </div>
    );
};

export default Post;