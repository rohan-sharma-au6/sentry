import React from 'react';
import { useParams } from 'react-router-dom';
import data from "./data/data.json"
import image from "./images/office.jpg"
const Details = () => {
    console.log(data)
    const { id1 } = useParams()
    console.log(id1)
    console.log("jhgcjhd")
    var obj = data.find(item => item.id === id1)
    console.log(obj)


    return (
        <div className="bg-white mx-auto " style={{width:"700px"}}>
            <img className=" my-10 " style={{ width: "700px",height:"250px" }} src={image} alt="" />
            <img className=" mx-8 border-solid  -mt-20" src={obj.logo} alt="" />
            <h5 className=" mx-10 font-bold">{obj.company}</h5>
            <p className="text-sm mx-12">{obj.location} • {obj.postedAt}</p>
            <div className="  flex  text-sm  content-around my-8 mt-4 mx-16 pt-4   ">
                <span className="text-purple-600 bg-purple-300 font-bold mr-4 mb-4 p-2 cursor-pointer rounded sm:mb-0"><p className="text-sm w-48  font-normal text-black">Role</p>{obj.position}</span>
                <span className="text-purple-600 bg-purple-300 font-bold mr-4 mb-4 p-2 cursor-pointer rounded sm:mb-0"> <p className="text-sm w-40 font-normal text-black">Level</p>{obj.level}</span>
                <span className="text-purple-600 bg-purple-300 font-bold mr-4 mb-4 p-2 cursor-pointer rounded sm:mb-0"><p className="text-sm w-40 font-normal text-black">Contract</p>{obj.contract}</span>
          </div>
          <h5 className=" mx-10 font-bold">Overview</h5>
          <article className="mx-12 my-4 text-gray-600">{obj.overview}</article>
          <h5 className=" mx-10 font-bold">Job Discription</h5>
          {obj.dis.map(dis=>(<li className="mx-12 my-4">{dis}</li>))}
          <h5 className=" mx-10 font-bold">Programming Languages</h5>
          <div className="  flex  text-sm  content-around my-8 mt-4 mx-16 pt-4   ">
              {obj.languages.map(lan=>(<span className="text-purple-500 bg-purple-200 font-bold mr-4 mb-4 p-2 cursor-pointer rounded ">{lan}</span>))}
          </div>

          <h5 className=" mx-10 font-bold">Tools</h5>
          <div className="  flex  text-sm  content-around my-8 mt-4 mx-16 pt-4   ">
              {obj.tools.map(lan=>(<span className="text-purple-500 bg-purple-200 font-bold mr-4 mb-4 p-2 cursor-pointer rounded ">{lan}</span>))}
          </div>
          <br/>
          <div className="text-white text-center mx-8 -my-12 bg-purple-600 font-bold mr-4 mb-4 p-2 cursor-pointer rounded sm:mb-0" to="">APPLY NOW</div>
            <br/>
        </div>
    );
};

export default Details;