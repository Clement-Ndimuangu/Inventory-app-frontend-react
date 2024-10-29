import React from 'react';
import { Item } from './Items';
import SingleItem from '../components/SingleItem';

export const ItemsList = ({setView,items, item, setItem, fetchSingleItem, deleteItem, editItem, searchItem, setSearchItem, handleSearch}) => {

	return(
		<div className='container'>
			<div>
				<div className='itemControls'>
					<div className='searchControls'>
						<input placeholder='Search Items' value={searchItem} onChange={(e)=>setSearchItem(e.target.value)}/>
						<button className="buttons" onClick={handleSearch}>Search</button>
					</div>
					<div>
						<button className="buttons" onClick={()=> setView('addItem')}>Add Item</button>
					</div>
				</div>
				<div className='itemList'>
					{
						items.map((item, idx) => {
							return <Item setItem={setItem} fetchSingleItem={fetchSingleItem} item={item} key={idx} />
						})
					}
				</div>
			</div>
			<div>
				<SingleItem item={item} setView={setView} editItem={editItem} deleteItem={deleteItem}/>
			</div>
		</div>
	)
} 
