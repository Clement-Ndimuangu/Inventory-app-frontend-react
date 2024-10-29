import React,{useState, useEffect} from "react";


const UpdateItem = ({item, setView, editItem})=>{

    console.log('Item:', item);
    const [formData, setFormData] = useState(
        {   
            id: item.id,
            name: item.name,
            price: item.price,
            category: item.category,
            description: item.description,
            image: item.image,
        }
    )

   
    useEffect(() => {
        if (item) {  setFormData({
                 id: item.id,
                name: item.name,
                price: item.price,
                category: item.category,
                description: item.description,
                image: item.image,
            })
        }
    }, [item])
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
             editItem(formData)
        } catch (error) {
            console.error("Sorry something went wrong when trying to update the item", error);
        }

    }

    const handleChange = async (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return(
        <div className='form-container'>
            <h2>Update Item</h2>
            <form onSubmit={handleSubmit}>
                <label>Name : </label>
                <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                <label>Price : </label>
                <input type="text" name="price" value={formData.price} onChange={handleChange}/>
                <label>Category : </label>
                <input type="text" name="category" value={formData.category} onChange={handleChange}/>
                <label>Description : </label>
                <input type="text" name="description" value={formData.description} onChange={handleChange}/>
                <label>Image : </label>
                <input type="text" name="image" value={formData.image} onChange={handleChange}/>
                <div className='submit-buttons'>
                    <button className="buttons" type="submit">Update</button> 
                    <button className="buttons" type="button" onClick={()=>{setView('viewItem')}}>Back</button>
                </div>
            </form>
        </div>
    ) 
}

export default UpdateItem;