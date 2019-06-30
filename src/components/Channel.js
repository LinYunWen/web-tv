import React from 'react';
import { Col } from "reactstrap";
import cls from "./style.scss";

class Channel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let data = this.props.data;
        let params = this.props.params;
        return (
            <Col xs="10" className={cls.channel}>
                <iframe src={`https://www.youtube.com/embed/${data.videoId}?controls=${params.controls}&autoplay=${params.autoplay}&fs=${params.fs}&rel=${params.rel}`}
                    allow={"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}
                    frameBorder={"0"} allowFullScreen autoPlay
                ></iframe>
            </Col>
        )
    }
}

export default Channel;
