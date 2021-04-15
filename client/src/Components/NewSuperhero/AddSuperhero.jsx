import React, { Component } from 'react'
import { addSuperheroes } from '../Superheroes/SuperheroesFunctions'

import ImageUploader from '../ImageUploader'

import Button from "../Buttons/Button"
import Input from "../Input/Input"
import Text from "../Text/Text"

import './styles.css'

class AddSuperhero extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _id: '',
            nickname: '',
            real_name: '',
            description: '',
            superpowers: '',
            catch_phrase: '',
            photos: [],
            superhero: []
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onChangeFile = this.onChange.bind(this)
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onChangeFile = e => {
        this.setState({
            [e.target.files]: e.target.files[0],
        })
    }

    onSubmit = async (e) => {
        e.preventDefault()

        if ( this.state.nickname === '' ||
            this.state.real_name === '' ||
            this.state.description === '' ||
            this.state.superpowers === '' ||
            this.state.catch_phrase === ''
        ) {
            alert('Fill in all fields with data')
            return false
        } else {
            const res = await addSuperheroes(
                this.state.nickname,
                this.state.real_name,
                this.state.description,
                this.state.superpowers,
                this.state.catch_phrase,
                this.state.photos,
            )

            this.setState({
                nickname: '',
                real_name: '',
                description: '',
                superpowers: '',
                catch_phrase: '',
                photos: [],
            })

            this.props.addToHeroesList(res.data);
            this.props.onCloseModal();
        }
    }

    render() {
        return ( 
            <div className="Container">
                <div className="Form-wrapper">
                    <form onSubmit={this.onSubmit}>
                        <div className="Text-wrapper">     
                            <Text>Nickname</Text>
                        </div>
                        <div className="Input-wrapper">
                            <Input 
                                type="input" 
                                name="nickname"
                                value={this.state.nickname || ''}
                                onChange={this.onChange.bind(this)}
                            />
                        </div>     
                        <div className="Text-wrapper"> 
                            <Text>Real name</Text>
                        </div>
                        <div className="Input-wrapper">    
                            <Input 
                                type="input" 
                                name="real_name"
                                value={this.state.real_name || ''}
                                onChange={this.onChange.bind(this)}
                            />
                        </div>
                        <div className="Text-wrapper">     
                            <Text>Description</Text>
                        </div>   
                        <div className="Input-wrapper"> 
                            <Input 
                                type="input" 
                                name="description"
                                value={this.state.description || ''}
                                onChange={this.onChange.bind(this)}
                            />
                        </div>
                        <div className="Text-wrapper">         
                            <Text>Superpowers</Text>
                        </div>
                        <div className="Input-wrapper">    
                            <Input
                                type="input" 
                                name="superpowers"
                                value={this.state.superpowers || ''}
                                onChange={this.onChange.bind(this)}
                            />
                        </div>
                        <div className="Text-wrapper">     
                            <Text>Catch Phrase</Text>
                        </div>
                        <div className="Input-wrapper">   
                            <Input 
                                type="input" 
                                name="catch_phrase"
                                value={this.state.catch_phrase || ''}
                                onChange={this.onChange.bind(this)}
                            />
                        </div>   
                        <ImageUploader
                                name="photos"
                                value={this.state.photos}
                                onChange={this.onChangeFile.bind(this)}
                            />
                    </form>   
                    <Button className="Button-green" 
                        onClick={this.onSubmit.bind(this)}
                    >ADD</Button> 
                </div>    
            </div>     
        )
    }
}

export default AddSuperhero