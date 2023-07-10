import axios from "axios";
import React from "react";
import { Card,CardBody,CardTitle,CardSubtitle,CardText,CardFooter,Button,Container } from "reactstrap";
import base_url from "../api/bootapi";
import { resolvePath } from "react-router-dom";
import { toast } from "react-toastify";

const Course =({ course ,update})=>{

    const deletecourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{ 
                toast.success("course deleted");
                update(id); 
            },(error)=>{
                toast.error("course not deleted!! server problem");
            }
        );
    };

    return(
        <Card className="text-center" >
            <CardBody>
                <CardSubtitle tag="h5">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={()=>{
                        deletecourse(course.id)
                    }}>Delete</Button>{' '}
                    <Button color="warning">Update</Button>
                </Container>
            </CardBody>
        </Card>
    );
};
export default Course;