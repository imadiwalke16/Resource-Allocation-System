import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h1>Welcome to XYZ College</h1>
      <p>Your gateway to seamless resource booking!</p>
      <button className="btn btn-primary" onClick={() => navigate("/book")}>
        Book Now
      </button>
    </div>
  );
};

export default Home;
