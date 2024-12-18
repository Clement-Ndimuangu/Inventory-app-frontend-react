import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';
import "../../style.css"
import img from '../../images/pngtree-vector-cart-icon-png-image_3876648.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import AddItem from './AddItem';
import UpdateItem from './UpdateItem';
import Cart from './Cart';


export const App = () => {
	
	const [items, setItems] = useState([]);
	const [item, setItem] = useState({});
	const [view, setView] = useState('viewItem');
	const [itemChanged, setItemChanged] = useState([])
	const [searchItem, setSearchItem] = useState('')

	async function fetchItems(){
		try {
			console.log(apiURL)
			const response = await fetch(`${apiURL}/items`,{"Access-Control-Allow-Origin": "*"});
			const itemsData = await response.json();
			setItems(itemsData);
			setItem(itemsData[0])
			console.log(itemsData);
			
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchItems();
	}, [itemChanged]);

	const fetchSingleItem = async (itemId)=>{
		try {
			const res = await fetch(`${apiURL}/items/${itemId}`)
			const data = await res.json()
			setItem(data)
			
		} catch (error) {
			console.error("Ohh something went wrong fetching single item", error)
		}
	}

	const deleteItem = async (itemId)=>{
		try {
			const res = await fetch(`${apiURL}/items/${itemId}`,{
				method: "DELETE"
			})
			const data = await res.json()
			if(data){
				setItemChanged(data)
				toast.warn("Item Deleted", {autoClose: 2000})
			}
		} catch (error) {
			console.error("Sorry something went wrong when trying to delete the item", error);
		}
	}

	const editItem = async(item)=>{
		const res = await fetch(`${apiURL}/items/${item.id}`,{
              method: "PUT",
              headers: {
                  "Content-Type": "application/json",
              }, body: JSON.stringify(item)
             })
             const data = await res.json()
			 toast.success("Item Updated Succesfully")
			setView('viewItem')
			setItemChanged(item)
	}
	// this is used to handle search base on search keywords
	const handleSearch = async()=>{
		try {
			const res = await fetch(`${apiURL}/items?search=${searchItem}`)
			const data = await res.json()
			setItems(data)
			console.log(data);
		} catch (error) {
			console.error("OOoops Something Went Wrong While Trying To Search", error);
		}
	}

	return (
		<main>	
			<div className='heading'>
			<h1 className='font'>"Oro Jackson" Inventory Management App</h1>
			<img id='cart' onClick={()=> setView('cart')} src={img}/>
			</div>
			{/* routing and rendering of the different components based on the view */}
			{view == 'viewItem'? 
			<div className='items'>
				<ItemsList setView={setView} items={items} item={item} setItem={setItem} editItem={editItem} fetchSingleItem={fetchSingleItem} deleteItem={deleteItem} searchItem={searchItem} setSearchItem={setSearchItem} handleSearch={handleSearch}/>
				<ToastContainer/>
			</div> : view == 'addItem'?
			 <AddItem setView={setView} setItemChanged={setItemChanged}/> :
			 view == 'cart' ? <Cart setView={setView}/> :
			 <UpdateItem 
			 	item={item} 
				editItem={editItem}		
				setView={setView}/>}
		</main>
	)
}