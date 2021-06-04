import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Channel from "./Channel";
import FavoriteCard from './FavoriteCard';
import data from "../data";
import cls from "./style.scss";

class Category extends React.Component {
    constructor(props) {
        super(props);
    }

    createContent(type) {
        let category = data[type];
        return type === "news" ?
            (<Channel data={category} params={category.params} />) :
            (<FavoriteCard data={category} />);
    }

    render() {
        return (
            <Container fluid={true} style={{ marginTop: "60px" }}>
                <Row id={this.props.type}>
                    <Col><h1>{this.props.type}</h1></Col>
                </Row>
                <Row className={cls.categoryRow}>
                    <Col>
                        {this.createContent(this.props.type)}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Category;
