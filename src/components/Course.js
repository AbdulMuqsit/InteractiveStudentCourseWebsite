import React from 'react'
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,

}from 'reactstrap'
import axios from 'axios';
import base_url from '../api/bootapi';
import { ToastContainer, toast } from "react-toastify";
export default function course({course,update}) {
  const deletecourse=(id)=>{
    axios.delete(`${base_url}/courses/${id}`).then(
      (response)=>{
       toast.success("Successfully deleted!");
       update(id);
      },
      (error)=>{
        toast.error("Error!");
      }
    )

  };
  return (
    <Card className='text-center'>
        <CardBody>
            <CardSubtitle className='font-weight-bold'>{course.title}</CardSubtitle>
            <CardText>{course.description}</CardText>
            <Container className='text-center'>
                <Button color='danger' onClick={()=>{
                  deletecourse(course.id);
                }} >Delete</Button>
                <Button color='warning ms-3'>Update</Button>
            </Container>
        </CardBody>
    </Card>
  )
}
