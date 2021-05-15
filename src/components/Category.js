import React from 'react';
import { Container, Row } from "reactstrap";
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
            (<Channel data={category} params={category.params}></Channel>) :
            category.videos.map((video, index) => {
                return (<FavoriteCard key={index} data={video}></FavoriteCard>);
            });

    }

    render() {
        return (
            <Container fluid={true}>
                <Row id={this.props.type}><h1>{this.props.type}</h1></Row>
                <Row className={cls.categoryRow}>
                    {this.createContent(this.props.type)}
                </Row>
            </Container>
        )
    }
}

export default Category;
