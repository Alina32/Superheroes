import React, { Component } from 'react';


class Image extends Component {
    static defaultProps = {
        src: 'https://via.placeholder.com/200X200',
        alt: 'image',
        width: 200,
        height: 200,
        className: '',
    }
    render() {
        const {
            component: Component,
            classes,
            // eslint-disable-next-line
            ...rest
        } = this.props

        return (
            <img
                {...this.props}
                src={this.props.src}
                alt={this.props.alt}
                width={this.props.width}
                height={this.props.height}
                className={classes}
            />
        )
    }

}

export default Image;