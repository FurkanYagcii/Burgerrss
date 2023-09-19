import React from "react";

function BurgersCard({ item }) {
  return (
    <div className="burgerCard">
      <img className="burgersItem" src={item.Img} height="200" alt="" />
      <h2 className="burgersItem">{item.Name}</h2>
      <p className="burgersItem">{item.Desc}</p>
      <p className="burgersItem">
        <span className="Price">{item.Price}</span>
      </p>
    </div>
  );
}

export default BurgersCard;
