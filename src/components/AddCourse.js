import React, { Fragment,useEffect, useState } from 'react'
 import base_url from '../api/bootapi';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
export default function AddCourse() {
    useEffect(()=>{
        document.title=" Add Course ";
    },[])
    const [course,setCourses]=useState({});
    //form-Handler function
    const handleform=(e)=>{
      console.log(course);
      postDatatoServer(course);
      e.preventDefault();
    };
//creating function to post to server
const postDatatoServer=(data)=>{ 
axios.post(`${base_url}/courses`,data).then(
(response)=>{
console.log(response);
console.log("success");
toast.success("course added successfully ");
setCourses({id:" ",title:" ",description:" "});
},
(error)=>{
 console.log(error);
 console.log("Failure");
 toast.error("Error!");
}

)};
  return (
    <Fragment>
        <h1 className='text-center pt-4'>Fill course details</h1>
        <Form onSubmit={handleform}>
            <FormGroup>
                <label for="userId">Course Id</label>
                <Input type="text" placeholder="Enter Id here" name="userId" id="userId" onChange={(e)=>{
                    setCourses({...course,id:e.target.value})
                }} />
            </FormGroup>
            <FormGroup>
                <label for="title">Course Title</label>
                <Input type="text" placeholder="Enter title here"  id="title" onChange={(e)=>{
                    setCourses({...course,title:e.target.value})
                }} />
            </FormGroup>
            <FormGroup>
                <label for="description">Description</label>
                <Input type="textarea" placeholder="Enter description here" id="description" style={{height:150}} onChange={(e)=>{
                    setCourses({...course,description:e.target.value})
                }} />
            </FormGroup>
            <Container className='text-center'>
                <Button type='submit' color='success'>Add-Course</Button>
                <Button type='reset' color='warning ms-2'onClick={()=>{
                    setCourses({});
                }} >Clear</Button>
            </Container>
        </Form>
    </Fragment>
  )
}
