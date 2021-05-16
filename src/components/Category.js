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
        if (type === "news") {
            return (
                <Col>
                    <Channel data={category} params={category.params} />
                </Col>
            );
        } else {
            return (
                category.videos.map((video, index) => {
                    return (
                        <Col xs="4">
                            <FavoriteCard key={index} data={video} />
                        </Col>
                    );
                })
            );
        }
    }

    render() {
        return (
            <Container fluid={true} style={{ marginTop: "60px" }}>
                <Row id={this.props.type}>
                    <Col><h1>{this.props.type}</h1></Col>
                </Row>
                <Row className={cls.categoryRow}>
                    {this.createContent(this.props.type)}
                </Row>
            </Container>
        )
    }
}

export default Category;
