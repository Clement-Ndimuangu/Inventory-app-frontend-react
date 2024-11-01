import apiURL from "../api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SingleItem = ({item, setView, editItem, deleteItem})=>{ 
    const addToCart = async(id)=>{
        try {
            let res = await fetch(`${apiURL}/carts/${id}`, {method : "PUT"})
            if(res){
                toast.success("Item Added To Cart", {autoClose: 1000})
            }
        } catch (error) {
            console.error(error);
            
        }
    } 
    return(
        <div className="singleItem">
            <div className="singleItemInfo">
                <div>
                    <h3 className="font">{item.name}</h3>
                </div>
                <div className="photo-info">
                    <img className="single-photo" src={item.image}/>
                    <div className="description">
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
            <div className="singleItem_buttons">
                <button className="buttons" onClick={()=> setView('editItem')}>Update Item</button>
                <button className="buttons" onClick={()=> deleteItem(item.id)}>Delete Item</button>
                <button className="buttons" onClick={()=> addToCart(item.id)}>Add To Cart</button>
            </div>
            <ToastContainer/>
        </div>
    ) 
}

export default SingleItem;
