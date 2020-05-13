import React from "react"
import "semantic-ui-css/semantic.min.css"
import { Container } from "semantic-ui-react";

import Navbar from "./components/Navbar"
import Home from "./components/Home"



const App = ()=>{

    return (
        <div>
            <Container>
                <Navbar/>
                <div style={{paddingTop:20}}>
                    <Home />
                </div>
            </Container>  
        </div>
    )
}

export default App