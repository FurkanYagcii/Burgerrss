import React from "react";
import BurgersCard from "./BurgersCard";
import { Data } from "../helper/data";

function menu() {
  return (
    <>
      <div className="menu">
        <h1 className="menu-h1">Burgerlerimiz</h1>
        <div className="burgersItem">
          {Data.map((item, key) => {
            return <BurgersCard item={item} key={key} />;
          })}
        </div>
      </div>
    </>
  );
}

export default menu;
