import React from 'react';
import { Container } from "reactstrap";
import Category from "./Category";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container fluid={true}>
                <Category type="news" />
                <Category type="favorite" />
            </Container>
        )
    }
}

export default App;
