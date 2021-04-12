import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Superheroes from '../Components/Superheroes/Superheroes'

import Text from "../Components/Text/Text"
import Button from "../Components/Buttons/Button"

import Header from "../Components/Header/Header"
import Modal from '../Components/Modal/Modal'
import AddSuperhero from '../Components/NewSuperhero/AddSuperhero'

import { deleteSuperheroes } from '../Components/Superheroes/SuperheroesFunctions'

const Home = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const [heroes, setHeroes] = useState([])
    const fetchHeroes = async () => {
        const res = await axios.get('api/superheroes')

        setHeroes(res.data)
    }
    useEffect(() => fetchHeroes(), [])
    const addToHeroesList = (hero) => {
        setHeroes([hero, ...heroes])
    }

    const handleDelete = async (val, e) => {
        let conf = window.confirm(`Are you sure?`)
        if (conf) {
            e.preventDefault()
            await deleteSuperheroes(val)

            setHeroes(heroes.filter((superhero) => superhero._id !== val))
        } else {
            alert(`ok we won't delete it `)
        }
    }

    return (
        <>
            <Header>
                <Button className="Button-default" onClick={handleOpen}  >
                    <Text className="Text-header">ADD NEW SUPERHEROES</Text>
                </Button>

                <Modal open={open} onClose={handleClose}>
                    <AddSuperhero
                        onCloseModal={handleClose}
                        addToHeroesList={addToHeroesList}
                    />
                </Modal>
            </Header>

             <Superheroes heroes={heroes} onDelete={handleDelete} /> 
        </>
    )
}

export default Home