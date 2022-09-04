import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  componentDidMount = () => {
    axios
    .get(`http://localhost:3001/books`)
    .then(result => {
      this.setState ({
        books : result.data
      })

    })
    .catch(err=>{
      console.log(err);
    })
  }


  render() {
    /* TODO: render all the books in a Carousel */
    return (
      <>
      
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.books.length ? (<Carousel>{
          this.state.books.map(item => {
            return (
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='./image.jpg'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <h3>{item.status}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    )
          })
         } </Carousel>) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
