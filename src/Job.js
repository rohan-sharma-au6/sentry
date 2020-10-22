import React,{useState,useEffect} from 'react';
import Joblist from './components/jobList'
import data from "./data/data.json"
import {Link} from "react-router-dom"
import './App.css';

function Job() {
  const [jobs, setJobs]=useState([])
  const [filters,setFilters] = useState([]);
  //console.log(data)
  useEffect(()=>{
    setJobs(data)
  },[]);
  const filterByTags =({role,level,tools,languages})=>{
    const tags =[role,level];
    if(filters.length===0){
      return true
    }
    if(tools){
      tags.push(...tools)
    }
    if(languages){
      tags.push(...languages)
    }
    return tags.some(tag=>filters.includes(tag))
  }
  const handleClick=(tag)=>{
    if(filters.includes(tag)){return}
    setFilters([...filters,tag])
  }
  const handleFilter=(tags)=>{
    setFilters(filters.filter((f)=>f !==tags ))
  }
  const filteredJobs = jobs.filter(filterByTags);
  
  return (
    <div className="App">
      <header className="bg-teal-500 mb-12" >
        <img src="/images/bg-header-desktop.svg" alt="snbc"/>
      </header>
      {filters.length===0?<p className="mx-4 text-gray-500 text-sm">*click on tags on right side to add filters</p> :null}
      
        {
          
          filters.length > 0 && (<div className="bg-white shadow-md  my-16 m-4 mx-10 p-6 rounded">
         { filters.map(
            (filter)=><span className="text-purple-500 bg-purple-200 cursor-pointer font-bold mr-4 mb-4 p-2 rounded sm:mb-0" 
            >{filter} <span onClick={()=>{handleFilter(filter)}}>×</span></span>
          )}
          </div>
       ) }
      
      {!jobs?<p>jobs...</p>:(
        filteredJobs.map(job=>(
          <Joblist job={job} key={job.id} data={data} handleClick={handleClick} />

        ))
      )}
      <Link to="/post"><div className="text-white text-center mx-8 -my-12 bg-purple-600 font-bold mr-4 mb-4 p-2 cursor-pointer rounded sm:mb-0" style={{width:"200px"}}>Create New Job</div></Link>
    </div>
  );
}

export default Job;
