import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Hero from "../Components/Hero/Hero"

import Header from "../Components/Header/Header"
import Link from "../Components/Link/Link"
import Text from "../Components/Text/Text"

import { getSuperhero, updateSuperheroes } from '../Components/Superheroes/SuperheroesFunctions'

class Superhero extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            superhero: null
        }
    }
    
    componentDidMount() {
      getSuperhero(this.props.match.params._id)
        .then(superhero => this.setState({ superhero }))
    }

    handleEditHero = async (hero) => {
        console.log('hero', hero)

        const res = await updateSuperheroes(hero)

        console.log('updateSuperheroes', res)
    }

    handleChange = (event) => {
        this.setState(({ superhero }) => ({
            superhero: {
                ...superhero,
                [event.target.name]: event.target.value
            }
        }))
    }
    
    render() {
        const { superhero } = this.state
        console.log(superhero);
        return (
            <>
                <Header>
                <Link href="/"><Text className="Text-header">HOME</Text></Link> 
                </Header>

                <Hero
                    nickname={superhero?.nickname}
                    real_name={superhero?.real_name}
                    description={superhero?.description}
                    superpowers={superhero?.superpowers}
                    catch_phrase={superhero?.catch_phrase}
                    photos={superhero?.photos || []}

                    onSave={this.handleEditHero}
                    onChange={this.handleChange}
                />
            </>   
        )
    }

}

export default withRouter(Superhero)