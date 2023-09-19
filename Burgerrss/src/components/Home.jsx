import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate("/menu");
  };
  return (
    <>
      <div className="home-div">
        <button onClick={handleBtnClick} className="home-btn">
          Sipariş Ver
        </button>
      </div>
    </>
  );
}

export default Home;
