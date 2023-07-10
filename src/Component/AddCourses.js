import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "./../api/bootapi";
import { toast } from "react-toastify";

const AddCourses=()=>{

    useEffect(()=>{
        document.title="Add Course || Learn Any Course Online"
    },[]);

    const[course,setCourse] = useState([]);

    //form handlere funtion
    const handlerForm = (e) =>{
        console.log(course);
        postDatatoServer(course);
        e.preventDefault();
    };

    //creating funtion to post data on server 
    const postDatatoServer=(data)=>{
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                console.log(response);
                console.log("response");
                toast.success("Course Added Successfully",{
                    position:"bottom-center"
                });
            },(error)=>{
                console.log(error);
                console.log("error");
                toast.error("Error! Something went wrong",{
                    position:"bottom-center"
                });
            }
        );
    };

    return(
        <Fragment>
            <h2 className="text-center my-3" >Fill Course Details</h2>
            <Form onSubmit={handlerForm}>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="text" placeholder="Enter here"
                    name="userId" id="userId"
                    onChange={(e) => setCourse({...course,id:e.target.value})}/>
                </FormGroup>

                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter title here" name="title" id="title"
                    onChange={(e) => setCourse({...course,title:e.target.value})}/>
                </FormGroup>
                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="textarea" placeholder="Enter description here" id="description" style={{height:150}}
                   onChange={(e) => setCourse({...course,description:e.target.value})}/>
                </FormGroup>

                <Container className="text-center">
                    <Button type= "submit" color="success">Add Course</Button>{' '}
                    <Button type="reset" color="warning">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    );
};

export default AddCourses;