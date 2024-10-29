const SingleItem = ({item, setView, editItem, deleteItem})=>{  
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
                <button className="buttons" onClick={()=> setView('cart')}>Add To Cart</button>
            </div>
        </div>
    ) 
}

export default SingleItem;
