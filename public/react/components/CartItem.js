export const CartItem = ({item, removeItem})=>{
    console.log(typeof item.price);
    
    return <div className="cartItem">
        <img src={item.image}/>
        <h3>{item.name}</h3>
        <h3>Price: ${item.price}</h3>
        <button className="buttons" onClick={()=> removeItem(item.id)}>Remove Item</button>
    </div>
}