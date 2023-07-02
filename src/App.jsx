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
      "name": "Sugar",
      "price": 20,
      "quantity": 0
    },
])
const [seno, setseno] = useState(items.length)
  function increment(price, sno) {
    setTotal(total + parseInt(price))
    const updatedValues = [...items]
    updatedValues[sno].quantity = updatedValues[sno].quantity + 1 
  }
  function decrement(price,sno) {
    if(total == 0) {
      alert("Items are already empty")
    } else {
      setTotal(total -  parseInt(price))
      const updatedValues = [...items]
      updatedValues[sno].quantity = updatedValues[sno].quantity - 1 
    }
  }
  function adder() {
    if (name == "" || price==0 || quantity == 0) {
      alert("Please properly enter the values")
    }else {
      setItems(items => [...items, {
        "sno" : seno,
        "name": name,
        "price": price,
        "quantity": parseInt(quantity)
      }])
      if (seno == 0 ) {
        setseno(2)
      } else {
        setseno(seno + 1)
      }
      setTotal(parseInt(quantity) * parseInt(price))
    }
    
  }
  
  return (
    <>
    <Header>
      Billing Management
    </Header>
    Add Items
      < br/>
      <div> 
        <input placeholder="Item Name" onChange={e => setName(e.target.value)}/> < br/>
        <input placeholder="Item quantity" onChange={e => setQ(e.target.value)}/> < br/>
        <input placeholder="Item Price" onChange={e => setPrice(e.target.value)}/> < br/>
        < br/>
        <AddBtn onClick={adder}>
          Add Item
        </AddBtn>
      </div>
      < br />
      Available Items
      < br/>
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
width: auto;
height: 45px;
background-color: #242424;
color: "white";
margin-right: 5px;
margin-bottom: 5px;
border-radius: 7px
`
const RemoveBtn = styled.button`
width: auto;
height: 45px;
background-color: #242424;
color: "white";
margin-bottom: 5px;
border-radius: 7px
`