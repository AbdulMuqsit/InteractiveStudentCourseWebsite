import React,{ useState,useEffect } from 'react'
import {Button} from 'reactstrap'
import {Jumbotron} from 'reactstrap'
// const Home=()=>{
//   useEffect(()=>{
//       document.title="All courses ";
//   },[])}


export default function Home() {
  useEffect(()=>{
    document.title="HomePage ";
},[])

  return (
    <div className="bg-light text-center py-5 ">
    <div className="container">
      <h1 className="display-4">Hello, world!</h1>
      <p className="lead">This is a simple Jumbotron-like section using Bootstrap utility classes.</p>
      <Button color='primary'>Submit</Button>
    </div>
  </div>
  )
}
