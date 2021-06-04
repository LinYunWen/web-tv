import React from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import cls from "./style.scss";

export default class FavoriteCard extends React.Component {
    constructor(props) {
        super(props);
    }

    genCards(videos) {
        let temp = [];
        let chunkSize = 3;
        for (let i = 0; i < videos.length; i += chunkSize) {
            temp.push(
                <Row key={i} style={{ paddingBottom: "10px" }}>
                    {videos.slice(i, i + chunkSize).map((video, j) => {
                        return (
                            <Col xs="4" key={j}>
                                <Card>
                                    <CardImg top width="100%" alt="Card image cap" src={video.image} />
                                    <CardBody>
                                        <CardTitle style={{ textAlign: "center", marginBottom: "0" }}>{video.title}</CardTitle>
                                    </CardBody>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            )
        }
        return temp;
    }

    render() {
        
        return (
            <Container fluid={true}>
                {this.genCards(this.props.data.videos)}
            </Container>
        );
    }
};
