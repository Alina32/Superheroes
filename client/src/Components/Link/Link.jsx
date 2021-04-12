import React, { Component } from 'react';

import './style.css'

class Link extends Component {
    static defaultProps = {
        href: '#',
        classes: 'Link',
    }
    render() {
        const {
            component: Component,
            classes,
            // eslint-disable-next-line
            ...rest
        } = this.props

        return (
            <a
                className={classes}
                href={this.props.href}
            >
                {this.props.children}
            </a>
        )
    }

}

export default Link;