import { useState } from "react";

const BookForm = ({ book, closeForm }) => {
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quantity > book.available) {
      setError(`Only ${book.available} copies available!`);
    } else {
      setError("");
      alert(`Successfully booked ${quantity} copies of "${book.title}"`);
      closeForm(); // Close form after booking
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h4>Book Details</h4>
        <p><strong>Title:</strong> {book.title}</p>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Description:</strong> {book.description}</p>
        <p><strong>Available:</strong> {book.available}</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Quantity</label>
            <input 
              type="number" 
              className="form-control"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              min="1" 
              max={book.available}
            />
            {error && <p className="text-danger">{error}</p>}
          </div>

          <div className="mb-3">
            <label className="form-label">Issue Date</label>
            <input type="date" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Return Deadline</label>
            <input type="date" className="form-control" required />
          </div>

          <button type="submit" className="btn btn-success">Confirm Booking</button>
          <button type="button" className="btn btn-secondary ms-2" onClick={closeForm}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
