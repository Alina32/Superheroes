// import React, { Component } from 'react'

// import Text from "../Text/Text"
// import Link from "../Link/Link"
// import Image from "../Image/Image"
// import Button from "../Buttons/Button"

// import './styles.css'

// class Superheroes extends Component {
//   constructor() {
//     super()
//     this.state = {
//       currentPage: 1,
//       superheroPerPage: 10
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick(event) {
//     this.setState({
//       currentPage: Number(event.target.id)
//     });
//   }

//   render() {
//     const { currentPage, superheroPerPage } = this.state
//     const { heroes: superhero } = this.props

//     const indexOfLastSuperhero = currentPage * superheroPerPage
//     const indexOfFirstSuperhero = indexOfLastSuperhero - superheroPerPage
//     const currentSuperheroes = superhero.slice(indexOfFirstSuperhero, indexOfLastSuperhero)

//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(superhero.length / superheroPerPage); i++) {
//       pageNumbers.push(i);
//     }

//     return (
//       <div className="Container">
//         {currentSuperheroes.map((superhero, index) => (
//           <div className="Wrapper" key={index}>
//             <div className="Delete-button">
//               <Button className="Button-del" onClick={this.props.onDelete.bind(this, superhero._id)}>
//                 <i className="fa fa-trash" />
//               </Button>
//             </div>
//             <div className="Image">
//               <Image width='240px'></Image>
//             </div>
//             <Link href={'/api/superheroes/' + superhero._id} className="Red">
//               <Text>{superhero.nickname}</Text>
//             </Link>
//           </div>
//         ))}
//         <div className="Pagination">
//           <ul>
//             {pageNumbers.map(number => (
//               <li
//                 key={number}
//                 id={number}
//                 onClick={this.handleClick}
//               >
//                 {number}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// export default Superheroes