import React from 'react';
import Channel from "./Channel";
import data from "../data";

class Category extends React.Component {
    constructor(props) {
        super(props);
    }

    createChannels(type) {
        return data[type].videos.map((channel, index) => {
            <Channel key={index} data={channel}></Channel>
        });
    }

    render() {
        return this.createChannels(this.props.type)
    }
}

export default Category;
