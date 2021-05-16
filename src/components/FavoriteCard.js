import React from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import cls from "./style.scss";

const FavoriteCard = ({ data }) => {
    return (
        <Card>
            <CardImg top width="100%" alt="Card image cap" src={data.image} />
            <CardBody>
                <CardTitle>{data.title}</CardTitle>
                <CardSubtitle>{data.subtitle}</CardSubtitle>
                <CardText>{data.description}</CardText>
            </CardBody>
        </Card>
    );
};

export default FavoriteCard;