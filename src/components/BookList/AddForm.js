import React, { Component } from 'react'
import Book from './Book'

export default class AddForm extends Component {

    constructor() {
        super()

        this.state = {
            books: [],

            title: '',
            author: '',
            year: '',
        }

        this.changeTitle=this.changeTitle.bind(this)
        this.changeAuthor=this.changeAuthor.bind(this)
        this.changeYear=this.changeYear.bind(this)
        this.addBooklist=this.addBooklist.bind(this)

    }

    changeTitle(event){
        this.setState({
            title: event.target.value 
        })
    }


    changeAuthor(event){
        this.setState({
            author: event.target.value 
        })
    }


    changeYear(event){
        this.setState({
            year: event.target.value 
        })
    }

    addBooklist(event){
        event.preventDefault()
       let {title,author,year}=this.state
        if(title && author && year){

        let NewObject={
            id:this.state.books.length,
            title,
            author,
            year
        }    
            this.setState(prevState => ({
                books: [...prevState.books, NewObject]
              }))
        }
        this.setState({
            title: '',
            author: '',
            year: ''  
        })
      
       
    }


    render() {
        return (
            <>
                <form id="book-form" autocomplete="off">
                    <div className="form-group">
                        <label for="title">Title</label>
                        <input type="text" id="title" className="form-control" value={this.state.title} onChange={this.changeTitle} />
                    </div>

                    <div className="form-group">
                        <label for="author">Author</label>
                        <input type="text" id="author" className="form-control" value={this.state.author} onChange={this.changeAuthor}/>
                    </div>

                    <div className="form-group">
                        <label for="year">Year</label>
                        <input type="text" id="year" className="form-control" value={this.state.year} onChange={this.changeYear} />
                    </div>
                    <input type="submit" value="Add Book" className="btn btn-warning btn-block add-btn" onClick={this.addBooklist} />
                </form>
                <table className="table table-striped mt-5 text-center">
                    <thead>
                        <tr>
                            {/* {this.state.books.map(book=>(<><th>{book.title}</th>
                            <th>{book.author}</th>
                            <th>{book.year}</th></>))} */}


                            <th>Title</th>
                            <th>Author</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody id="book-list">
                    {this.state.books.map(book=>(<Book {...book}></Book>))}
                        {/* <Book /> */}
                    </tbody>
                </table>


            </>
        )
    }
}
