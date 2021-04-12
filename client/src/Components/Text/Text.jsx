import React, { Component } from 'react';

import './style.css'

class Text extends Component {
    static defaultProps = {
        component: "span",
        color: "#363636",
        classes: 'Text_Header',
    }
    render() {
        const {
            component: Component,
            color,
            classes,
            ...rest
        } = this.props

        return (
            <Component
                className={classes}
                color={this.props.color}
                {...rest}
            />
        )
    }

}

export default Text;