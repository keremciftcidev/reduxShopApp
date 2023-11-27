import React from "react";
import { useSelector,useDispatch } from "react-redux";
import ShopItem from "./ShopItem";
import { clearCart } from "../control/shopSlice";

function ShoppingList() {
    const dispatch = useDispatch()
  const { shopItems, quantity, total } = useSelector((store) => store.shop);

  return (
    <>
      {quantity < 1 ? (
        <section className="cart">
          <header>
            <h2>Basket</h2>
            <h4>Basket empty</h4>
          </header>
        </section>
      ) : (
        <section className="cart">
          <header>
            <h2>Basket</h2>
           
          </header>
          <div>
            {shopItems.map((item)=>{
                return <ShopItem key={item.id}{...item}/>
            })}
          </div>
          <footer>
            <hr/>
            <div>
                <h4>Total Price <span>{total} $</span></h4>
            </div>
            <button className="cartClearButton" onClick={()=>dispatch(clearCart())}>Clean</button>
          </footer>
        </section>
      )}
    </>
  );
}

export default ShoppingList;
