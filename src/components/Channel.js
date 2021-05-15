import React from 'react';
import {
    Col,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from "reactstrap";
import cls from "./style.scss";

class Channel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            animating: false
        }
        this.length = this.props.data.videos.length;
    }

    setActiveIndex(index) {
        this.setState({ activeIndex: index });
    }

    setAnimating(bool) {
        this.setState({ animating: bool });
    }

    next = () => {
        console.log(this.state.animating)
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === this.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setActiveIndex(nextIndex);
    }
    
    previous = () => {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.length - 1 : this.state.activeIndex - 1;
        this.setActiveIndex(nextIndex);
    }
    
    goToIndex = (newIndex) => {
        if (this.state.animating) return;
        this.setActiveIndex(newIndex);
    }

    genSlides(data) {
        let params = this.props.params;
        let self = this;
        return data.videos.map((video, index) => {
            return (
                <CarouselItem
                    onExiting={() => self.setAnimating(true)}
                    onExited={() => self.setAnimating(false)}
                    key={index}
                >
                    <iframe src={`https://www.youtube.com/embed/${video.videoId}?controls=${params.controls}&autoplay=${params.autoplay}&fs=${params.fs}&rel=${params.rel}`}
                        allow={"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}
                        frameBorder={"0"} allowFullScreen autoPlay height="600px" width="100%"
                    ></iframe>
                    <CarouselCaption captionText={video.title} captionHeader={video.title} />
                </CarouselItem>
            );
        });
    }

    render() {
        let data = this.props.data;
        return (
            <Col xs="12" className={cls.channel}>
                <Carousel
                    activeIndex={this.state.activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    <CarouselIndicators items={data.videos} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
                    {this.genSlides(data)}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </Col>
        )
    }
}

export default Channel;
