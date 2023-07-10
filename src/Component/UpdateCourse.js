import React, { Fragment } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";

const UpdateCourse=()=>{
    return(
        <Fragment>
            <Form>
                <FormGroup>
                    <label for="courseId">Course Id</label>
                    <Input type="text" placeholder="Enter Id" id="courseId"/>
                </FormGroup>
                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter Course Title" id="title"/>
                </FormGroup>
                <FormGroup>
                    <label for="desription">Course Description</label>
                    <Input type="textarea" placeholder="Enter Course Deacription" id="description" style={{height:150}}/>
                </FormGroup>

                <Container className="text-center">
                    <Button color="primary" outline>Update</Button>
                </Container>
            </Form>
        </Fragment>
    );
};

export default UpdateCourse;