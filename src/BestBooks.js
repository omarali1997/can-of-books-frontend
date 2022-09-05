import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';


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
      .get(`https://bookserver03.herokuapp.com/books`)
      .then(result => {
        this.setState({
          books: result.data
        })

      })
      .catch(err => {
        console.log(err);
      })
  }

  addBook = (event) => {
    event.preventDefault();
    // const BookTitle = event.target.BookTitle.value;
    // const BookDescription = event.target.BookDescription.value;
    // const BookStatus = event.target.BookStatus.value;
    const obj = {
      BookTitle: event.target.BookTitle.value,
      BookDescription: event.target.BookDescription.value,
      BookStatus: event.target.BookStatus.value
    }

    axios
      .post(`https://bookserver03.herokuapp.com/books`, obj)
      .then(result => {
        this.setState({
          books: result.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  deleteBook = (id) => {
    axios
      .delete(`https://bookserver03.herokuapp.com/books/${id}`)
      .then(result => {
        this.setState({
          books: result.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    /* TODO: render all the books in a Carousel */
    return (
      <>



        <form onSubmit={this.addBook}
          style={{
            margin: '10px',
            justifyContent: "center", border: "3px solid",
            width: "800px",
            height: "90px"
          }}>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        <input type="text" name="BookTitle" placeholder='Book Title' />
        <input type="text" name="BookDescription" placeholder='Book Description' />
        <input type="text" name="BookStatus" placeholder='Book Status' />
        <Button type='submit' variant="outline-primary">Add New Book!</Button>
        {/* <button type='submit'>Add New Book!</button> */}
      </form>
        {
      this.state.books.length ? (<Carousel>{
        this.state.books.map(item => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src='/images/image.jpg'
                alt="First slide"
                // style={{width:'500px', height:'523px'}}
              />
              <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h3>{item.status}</h3>
                <Button onClick={() => this.deleteBook(item._id)} variant="outline-danger">Delete</Button>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })
      } </Carousel>) : (
        <h3>No Books Found :(</h3>
      )
    }
      </>
    )
  }
}

export default BestBooks;
