import React, { Component } from 'react'

import Text from "../Text/Text"
import Link from "../Link/Link"
import Image from "../Image/Image"
import Button from "../Buttons/Button"

import './styles.css'

class Superheroes extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: 1,
      superheroPerPage: 5
    }
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { currentPage, superheroPerPage } = this.state
    const { heroes: superhero } = this.props

    const indexOfLastSuperhero = currentPage * superheroPerPage
    const indexOfFirstSuperhero = indexOfLastSuperhero - superheroPerPage
    const currentSuperheroes = superhero.slice(indexOfFirstSuperhero, indexOfLastSuperhero)

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(superhero.length / superheroPerPage); i++) {
      pageNumbers.push(i);
    }
    console.log(currentSuperheroes)
    return (
      <div>
        <div className="Wrapper">
          {currentSuperheroes.map((superhero, index) => (
            <div className="Border" key={index}>
              <div className="Delete-button">
                <Button className="Button-del" onClick={() => this.props.onDelete(superhero._id)}>
                  <i className="fa fa-trash" />
                </Button>
              </div>
              <div className="Image">
                <Image width='240px'
                 src={superhero.photos[0]?.path}
                />
              </div>
              <Link href={'/api/superheroes/' + superhero._id} className="Red">
                <Text>{superhero.nickname}</Text>
              </Link>
            </div>
          ))}

        </div>
        <div className="Pagination">
          <ul>
            {pageNumbers.map(number => (
              <li
                key={number}
                id={number}
                onClick={this.handleClick}
              >
                {number}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Superheroes