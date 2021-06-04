import React from 'react';
import { Container } from "reactstrap";
import Category from "./Category";
import DefaultNavbar from "./DefaultNavbar";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <DefaultNavbar />
                <Container fluid={true}>
                    <Category type="news" />
                    <Category type="favorite" />
                </Container>
            </React.Fragment>
        )
    }
}

export default App;
