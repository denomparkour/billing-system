import React from 'react'
import styled from 'styled-components'

// sno, product name, quantity, price, total, plus button
function List({s, name, q, price}) {
  return (
    <>
        <Container>
            sno: {s} < br/>
            Product name: {name} < br/>
            Current Quantity: {q} < br/>
            Current Price: {price} < br/>

        </Container>
    </>
  )
}

export default List

const Container = styled.div`
height: auto;
background-color:  #5A5A5A;
padding: 10px;
margin-bottom: 10px;
border-radius: 10px;
`