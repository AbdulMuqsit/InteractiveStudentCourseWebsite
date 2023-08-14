import React, { useState, useEffect } from "react";
import Course from "./Course";
import App from "../App";
import base_url from "../api/bootapi";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
// export default function Allcourses() {
//   return (

//   )
// }
const Allcourses = () => {
  useEffect(() => {
    document.title = "All courses ";
  }, []);
  //function to call server
  //from here
  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
        
      (response) => {
        //for success
        console.log(response.data);
        toast.success("Courses has been loaded");
        setCourses(response.data);
      },
      (error) => {
        console.log(error);
        toast.error("Something went wrong ");
      }
    );
  };
  //Till above
 

   

  // calling loading function
  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  const [courses, setCourses] = useState([
    // {
    //   title: "JAVA Course",
    //   description: "This is description of java course ",
    // },
    // {
    //   title: "React Course",
    //   description: "This is description of React course ",
    // },
    // {
    //   title: "Django Course",
    //   description: "This is description of django course ",
    // },
  ]);
 const updateCourses=(id)=>{
  setCourses(courses.filter((c)=>c.id!=id))

 }
  return (
    <div>
      <h1 className="text-center">All courses</h1>
      <p className="text-center">List of courses are as follows</p>
      {courses.length > 0
        ? courses.map((item) => <Course key={item.id} course={item} update={updateCourses} />)
        : "No courses"}
    </div>
  );
};
export default Allcourses;
