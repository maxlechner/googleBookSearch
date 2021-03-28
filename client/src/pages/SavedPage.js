import React, { Component } from "react";
import { Container } from "react-bootstrap";
import API from "../utils/API";
import SavedBookCard from "../components/SavedBookCard"

class Saved extends Component {
  state = {
      savedBooks: []
  };

  //when this component mounts, grab all books that were save to the database 
  componentDidMount() {
      API.getBooks()
          .then(res => this.setState({ savedBooks: res.data }))
          .catch(err => console.log(err))
  }

  //function to remove book by id
  handleDeleteButton = id => {
      API.deleteBook(id)
          .then(res => this.componentDidMount())
          .catch(err => console.log(err))
          .then(alert("Book Deleted"))
  }

  render() {
      return (
          <div>
              <Container>
                  <SavedBookCard savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
              </Container>
          </div>
      )
  }
}

export default Saved