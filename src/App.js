import logo from './logo.svg';
import './App.css';
import { Button,Container,Row,Col } from "reactstrap";
import { ToastContainer,toast } from "react-toastify";
import Home from './components/Home';
import Course from './components/Course';
import Allcourses from './components/Allcourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header';
 import Menus from './components/Menus';
 import { BrowserRouter as Router,Route,Switch,Routes} from 'react-router-dom';
 import About from './About';
 import Contact from './Contact';

function App() {
  const btnHandle=()=>{
// toast("This is my first message ");
toast.success("done",{
  position:'top-center',
});
  };
  return (
    // From here we will start our project
   
   
    <div>
      {/* <ToastContainer/>  */}
       {/* <h1>This is react buttons </h1> */}
      {/* <Button color='primary' onClick={btnHandle}>React Button</Button>  */}
       {/* <Home/>  */}
       {/* <Course course={{title:"React JS ",description:"This is the descrption of our course"}} /> */}
        {/* <Allcourses/>  */}
        {/* <AddCourse/> */}
         {/* {/* <ToastContainer/> */}
         
         <Router>
         <ToastContainer/>
        <Container>
         <Header/>
          <Row>
            <Col md={4}>
            <Menus/>
            </Col>
            <Col md={8}>
             {/* <h2>this is container side</h2>  */}
             {/* <Route path='/' Component={<Home/>} exact/>             */}
             <Routes>
             <Route exact path='/' element={< Home />}></Route>
             <Route exact path='/add-course' element={< AddCourse />}></Route>
             <Route exact path='/view-course' element={< Allcourses />}></Route>
             <Route exact path='/About' element={< About />}></Route>
             <Route exact path='/contact' element={< Contact />}></Route>
             </Routes>
             {/* <Home/> */}
             {/* <Route path='/add-course' Component={<AddCourse/>} exact/>  */}
            {/* <Route path='/view-course' Component={<Allcourses/>} exact/> */}
            </Col>
          </Row>
        </Container> 
        </Router>
      
   
    </div>
  );
}

export default App;
