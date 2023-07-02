import { useState, useEffect } from 'react'
import List from './components/List'
import './App.css'
import styled from 'styled-components';

function App() {
  
  const [total,setTotal] = useState(0)
  const [temp, setTemp] = useState(0)
  const [name, setName] = useState("")
  const [quantity, setQ] = useState(0)
  const [price, setPrice] = useState(0)
  const [items,setItems] = useState([
    { 
      "sno": 0,
      "name": "sugar",
      "price": 20,
      "quantity": 0
    },
])
const [sno, setsno] = useState(items.count)
  function increment(price, sno) {
    setTotal(total + price)
    // items[sno].quantity = items[sno].quantity + 1
    console.log(items.count) 
  }
  function decrement(price) {
    if(total == 0) {
      alert("Cart is already empty")
    } else {
      setTotal(total - price)
    }
  }
  function adder() {

    setItems(items => [...items, {
      "sno" : 1,
      "name": name,
      "price": price,
      "quantity": quantity
    }])
    console.log(items)
  }
  
  return (
    <>
    <Header>
      Billing Management
    </Header>
      Available Items
      < br/>
      < br/>
      <div> 
        <label>Item Name : </label>
        <input onChange={e => setName(e.target.value)}/> < br/>
        <label>Item quantity : </label>
        <input onChange={e => setQ(e.target.value)}/> < br/>
        <label>Item Price : </label>
        <input onChange={e => setPrice(e.target.value)}/> < br/>
        <AddBtn onClick={adder}>
          Add Item
        </AddBtn>
      </div>
      < br />
      {items.map((i) => {
        return(
          <>
        <List s={i.sno} name={i.name} price={i.price} q={i.quantity}/>
        <AddBtn onClick={() => increment(i.price, i.sno)}>Add</AddBtn>
        <RemoveBtn onClick={() => decrement(i.price, i.sno)}>Remove</RemoveBtn>
          </>
      )})}
      
      <div>
        Total Price : {total}
      </div>
    </>
  )
}

export default App;
const Header = styled.h1`
color: "white";
`
const AddBtn = styled.button`
width: 50px;
height: 45px;
background-color: #242424;
color: "white";
margin-right: 5px;
margin-bottom: 5px;
`
const RemoveBtn = styled.button`
width: auto;
height: 45px;
background-color: #242424;
color: "white";
margin-bottom: 5px;
`