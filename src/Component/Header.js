import React from "react";
import { Card, CardBody } from "reactstrap";

function Header(){
    return(
        <div >
            <Card className="my-2 ">
                <CardBody className="lightblue" >
                <h1 class="text-center my-2 ">Welcome to Online Courses</h1>
                </CardBody>
            </Card>
        </div>
    );
}

export default Header;