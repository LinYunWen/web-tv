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

    createChannels(type) {
        let category = data[type];
        return category.isIframe ?
            category.videos.map((channel, index) => {
                return (<Channel key={index} data={channel}></Channel>);
            }) :
            category.videos.map((video, index) => {
                return (<FavoriteCard key={index} data={video}></FavoriteCard>);
            });

    }

    render() {
        return (
            <Container fluid={true}>
                <Row><h1>{this.props.type}</h1></Row>
                <Row className={cls.categoryRow}>
                    {this.createChannels(this.props.type)}
                </Row>
            </Container>
        )
    }
}

export default Category;
