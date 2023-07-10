import React, { useState,useEffect } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import axios, { Axios } from "axios";

const Allcourse = ()=>{

    useEffect(() => {
        document.title="All Courses || Learn Any Course Online";
    },[]);

  

    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=> {
                //for success
                console.log(response.data);
                toast.success("courses has been loaded",{
                    position:"bottom-center"
                });
                setCourses(response.data);
            },
            (error)=>{
                //for error
                console.log(error);
                toast.error("something went wrong",{
                    position:"bottom-center"
                });
            }
        );
    };

    //calling loading course funtion 
    useEffect(()=>{
        getAllCoursesFromServer();
    },[]);

    const[courses, setCourses] = useState([]);

    const updateCourse=(id)=>{
        setCourses(courses.filter((c)=>c.id!=id));
    };

    return(
        <div>
            <h1>All Courses</h1>
            <p>List of courses</p>
            {courses.length>0 
            ? courses.map((item)=> <Course key={item.id} course={item } update={updateCourse}/>)
            : "No Courses"}
        </div>
    );
};

export default Allcourse;

