import React, { Component } from 'react'

import './styles.css'

class Button extends Component {
    static defaultProps = {
        component: "button",
        classes: 'Button--green',
    }
    render() {
        const {
            component: Component,
            classes,
            background,
            ...rest
        } = this.props

        return (
            <Component
                style={{
                    background
                }}
                className={classes}
                {...rest}
            />
        )
    }

}

export default Button