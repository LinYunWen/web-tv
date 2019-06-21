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
                <iframe src={`https://www.youtube.com/embed/${data.videoId}?controls=${data.controls}&autoplay=0=${data.autoplay}&fs=${data.fs}&rel=${data.rel}`}
                    allow={"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}
                    frameBorder={"0"} allowFullScreen
                ></iframe>
            </Col>
        )
    }
}

export default Channel;
