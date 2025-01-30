import { useState } from "react";
import BookForm from "../components/BookForm";

const Library = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  // Dummy book data
  const books = [
    { id: 1, title: "React Basics", author: "John Doe", available: 5, description: "Learn React from scratch." },
    { id: 2, title: "Advanced JavaScript", author: "Jane Smith", available: 2, description: "Deep dive into JS concepts." },
    { id: 3, title: "Node.js Guide", author: "Michael Lee", available: 3, description: "Build powerful backend apps." }
  ];

  return (
    <div className="container mt-5">
      <h2>Library Booking</h2>
      <p>Select a book to issue.</p>
      
      <div className="row">
        {books.map((book) => (
          <div className="col-md-4 mb-3" key={book.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">By {book.author}</h6>
                <p className="card-text">{book.description}</p>
                <p><strong>Available:</strong> {book.available}</p>
                <button className="btn btn-primary" onClick={() => setSelectedBook(book)}>Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show booking form if a book is selected */}
      {selectedBook && <BookForm book={selectedBook} closeForm={() => setSelectedBook(null)} />}
    </div>
  );
};

export default Library;
