import React from 'react';
import { Col } from "reactstrap";
import cls from "./style.scss";

class Channel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let data = this.props.data;
        return (
            <Col xs="10" className={cls.channel}>
                <iframe src={`https://www.youtube.com/embed/${data.videoId}?controls=0&autoplay=0&fs=1&rel=0`}
                    allow={"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}
                    frameBorder={"0"} allowFullScreen
                ></iframe>
            </Col>
        )
    }
}

export default Channel;
