import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, Row } from 'reactstrap';
import { ToastContainer,toast } from 'react-toastify';
import Home from './Component/Home';
import Course from './Component/Course';
import Allcourse from './Component/Allcourses';
import AddCourses from './Component/AddCourses';
import UpdateCourse from './Component/UpdateCourse';
import Header from './Component/Header';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Menus from './Component/Menus';



function App() {
 
const btnHandle=()=>{
  toast("this is my first message",{position:"top-center"})
};

  return(
    <Router>
        <div>
        <ToastContainer/>
          {/* <h1>
            This is bootstrap container
          </h1>
          <Button color='success' outline onClick={btnHandle}>
            first button
          </Button> */}
          {/* <Home/> */}
          {/* <Course course={{title:"Advance Python", description:"This is advance python course"}}/> */}
          {/* <Allcourse/>

          <AddCourses/>

          <UpdateCourse/> */}

          <Container>
           <Header/>
            <Row>
              <Col md={4}><Menus/></Col>
              <Col md={8}>
                <Routes>
                    <Route path='/' Component={Home} exact/>
                    <Route path='/add-courses' Component={AddCourses} exact/>
                    <Route path='/view-courses' Component={Allcourse} exact/>
                </Routes>
              </Col>
            </Row>
          </Container>
      </div>
    </Router>
      
  );

  
    

  
  
}

export default App;
