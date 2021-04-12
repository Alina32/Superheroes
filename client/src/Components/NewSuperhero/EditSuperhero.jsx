import React, { Component } from 'react'
import {
    Form,
    Container,
    Button,
    Input,
    TextArea,
} from 'semantic-ui-react'
import {
    deleteSuperheroes,
    updateSuperheroes,
} from '../Superheroes/SuperheroesFunctions'

import { withRouter } from "react-router-dom"

class EditSuperhero extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _id: '',
            nickname: '',
            real_name: '',
            description: '',
            superpowers: '',
            catch_phrase: '',
            superhero: []
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = async (e) => {
        e.preventDefault()
        e.preventDefault()
        await updateSuperheroes(
            this.state.nickname,
            this.state.real_name,
            this.state.description,
            this.state.superpowers,
            this.state.catch_phrase,
            this.state._id
        )
    }

    onDelete = (val, e) => {
        e.preventDefault()
        deleteSuperheroes(val)

        let data = [...this.state.superhero]
        data.filter(function (superhero, index) {
            if (superhero._id === val) {
                data.splice(index, 1)
            }
            return true
        })
        this.setState({ superhero: [...data] })
    }

    render() {
        console.log(this.props)
        return (
            <Container style={{ width: '800px', marginBottom: '100px' }}>

                <Form className='attached fluid segment' style={{ marginBottom: '20px' }} onSubmit={this.onSubmit}>
                    <Form.Field
                        control={Input}
                        placeholder="Назва"
                        name="nickname"
                        type="text"
                        value={this.state.nickname || ''}
                        onChange={this.onChange.bind(this)}
                    />

                    <Form.Field
                        control={Input}
                        placeholder="Назва"
                        name="real_name"
                        type="text"
                        value={this.state.real_name || ''}
                        onChange={this.onChange.bind(this)}
                    />

                    <Form.Field
                        control={TextArea}
                        name="description"
                        type="text"
                        placeholder="Опис"
                        value={this.state.description || ''}
                        onChange={this.onChange.bind(this)}
                    />

                    <Form.Field
                        control={Input}
                        placeholder="superpowers"
                        name="superpowers"
                        type="text"
                        value={this.state.superpowers || ''}
                        onChange={this.onChange.bind(this)}
                    />
                    <Form.Field
                        control={Input}
                        placeholder="catch_phrase"
                        name="catch_phrase"
                        type="text"
                        value={this.state.catch_phrase || ''}
                        onChange={this.onChange.bind(this)}
                    />


                    <Form.Field
                        control={Button}
                        type="submit"
                        color="instagram"
                        content="ОК"
                    />

                </Form>

            </Container>
        )
    }
}

export default withRouter(EditSuperhero)