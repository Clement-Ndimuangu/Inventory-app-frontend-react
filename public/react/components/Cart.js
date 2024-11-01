import { useEffect, useState } from "react";
import apiURL from "../api";
import { CartItem } from "./CartItem";

const Cart = ({setView})=>{
    const [cart, setCart] = useState([])
    // const [Total, setTotal] = useState(0)

    const fetchCart = async ()=>{
        try {
            let res = await fetch(`${apiURL}/carts/1`)
            let data = await res.json()
            setCart(data.items)
            console.log(data); 
        } catch (error) {
            console.error(error)
        }
    }

    const removeItem = async (itemId)=>{
        try {
            let res = await fetch(`${apiURL}/carts/removeitem/${itemId}`, {method: "PUT"})
            let data = await res.json();
            setCart(data.items)
            setView("cart")
        } catch (error) {
            console.error(`Something wrong when removing item ${itemId} from cart`);
        }
    }

    let total = cart.length > 0 ? cart.reduce((Total, item)=> Total + item.price, 0): 0;
    let tax = total * 0.062

    useEffect(()=>{fetchCart()},[])

    return <div className="cart">
        {cart.length <= 0? <h1>Cart Is Empty</h1>: 
        <div>
            <h1>You Have {cart.length} Items In Your Cart</h1>
            <div className="cart">
                {cart.map(item => <CartItem key={item.id} removeItem={removeItem} item={item}  />)}
            </div>
            <h3>Total: ${total}</h3>
            <h3>Sales Tax: ${tax}</h3>
            <h3>Net Total: ${total + tax}</h3>
            <button className="buttons" onClick={()=> setView("viewItem")}>Back</button>
        </div>}
    </div>
}

export default Cart;