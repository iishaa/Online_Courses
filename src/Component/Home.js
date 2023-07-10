import React, { useEffect } from "react";
import { Container,Button } from "reactstrap";
import Header from "./Header";

const Home=()=>{
    useEffect(()=>{
        document.title="Home || Learn Any Course Online"
    },[]);
    return <div >
        <div class="container-fluid grey-light text-dark p-3 "  >
            <div class="container grey-light p-4">
                <h4 class=" text-center" >Welcome to Admin Dashboard</h4>
                {/* <Header/> */}
                <hr/>
                <Container className="text-center">
                    <Button color="primary" outline>
                        Start Using 
                    </Button>
                </Container>
            </div>
        </div>
    </div>
};

export default Home;