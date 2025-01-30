import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();
  const options = ["Library", "Study Space", "Hostel", "Sports Equipment", "Parking"];

  return (
    <div className="container text-center mt-5">
      <h2>Select What You Want to Book</h2>
      <div className="row mt-4">
        {options.map((item, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <button className="btn btn-outline-primary w-100" onClick={() => navigate(`/${item.toLowerCase().replace(" ", "-")}`)}>
              {item}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booking;
