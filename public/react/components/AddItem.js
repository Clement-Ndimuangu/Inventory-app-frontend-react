import React, { useEffect, useState } from 'react'
import apiURL from '../api'


const AddItems = ({setView, setItemChanged})=>{
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('')

    const nameHandler = (e) => setName(e.target.value)
    const descriptionHandler = (e) => setDescription(e.target.value)
    const priceHandler = (e) => setPrice(e.target.value)
    const categoryHandler = (e) => setCategory(e.target.value)
    const imageHandler = (e) => setImage(e.target.value)

    const submitHandler = async (e) => {
        e.preventDefault()

        const formData = {
            name: name,
            description: description,
            price: price, 
            category: category,
            image: image,
        }

        try{
            const response = await fetch(`${apiURL}/items`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const result = await response.json()
            setItemChanged(result)
            setView('viewItem')
        } catch(error){
            console.error('Error creating item')
        }
    }
    return(
        <div className='form-container'>  
            <h2>Add New Item</h2>
            <form onSubmit={submitHandler}>
                <input
                type='text'
                value={name}
                onChange={nameHandler}
                placeholder='Name'
                />
                <input
                type='text'
                value={description}
                onChange={descriptionHandler}
                placeholder='Description'
                />
                <input
                type='number'
                value={price}
                onChange={priceHandler}
                placeholder='Price'
                />
                <input
                type='text'
                value={category}
                onChange={categoryHandler}
                placeholder='Category'
                />
                <input
                type='text'
                value={image}
                onChange={imageHandler}
                placeholder='Image Link'
                />
                <div className='submit-buttons'>
                    <button className='buttons'>Add Item</button>
                    <button className="buttons" type="button" onClick={()=>{setView('viewItem')}}>Back</button>
                </div>
            </form>
        </div>
    )
}

export default AddItems;