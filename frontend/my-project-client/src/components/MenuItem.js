import React from 'react'

export default function MenuItem(props) {
    return (
        <div>
            <br></br>
            <p> {props.item.name} --- {props.item.description? props.item.description: "No Description"} --- ${props.item.price}</p>
            
      </div>
    )
}
