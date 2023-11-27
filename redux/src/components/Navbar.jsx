import React from "react";
import { BsBasket3Fill } from "react-icons/bs";
import {useSelector} from 'react-redux'

function Navbar() {
  const {quantity} = useSelector((store) => store.shop)
  return (
    <nav>
      <div className="navbar">
        <h3>Shopping App</h3>
        <div className="navDiv">
          <div className="itemsDiv">
            <p>{quantity}</p>
          </div>
          <BsBasket3Fill className="itemsIcon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
