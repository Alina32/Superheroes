import React, { Component } from 'react';

import './styles.css'

class Input extends Component {
    static defaultProps = {
        classes: 'Input-default',
        type: 'input',
        name: 'input',
        value: 'input',
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
            <input
                {...this.props}
                type={this.props.type}
                name={this.props.name}
                value={this.props.value}
                className={classes}
            />
        )
    }

}

export default Input