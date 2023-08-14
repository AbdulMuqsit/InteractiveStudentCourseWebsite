import React from 'react'
import { ListGroup, ListGroupItem, } from 'reactstrap'
import { Link } from "react-router-dom";

export default function Menus() {
  return (
    <div>
             <ListGroup>
            <Link className='list-group-item list-group-item-action ' tag="a" to="/" action>
               Home 
            </Link>
            <Link className='list-group-item list-group-item-action'  tag="a" to="/add-course" action>
               Add Course 
            </Link>
            <Link className='list-group-item list-group-item-action' tag="a" to="/view-course" action>
               View Course 
            </Link>
            <Link className='list-group-item list-group-item-action' tag="a" to="/About" action>
               About 
            </Link>
            <Link className='list-group-item list-group-item-action' tag="a" to="/contact" action>
               Contact 
            </Link>
        </ListGroup>
    </div>
  )
}
