import React from 'react'
import MenuItem from './MenuItem'
import { Columns } from 'react-bulma-components'

export default function MenuCol2(props) {
    const kmenu = props.menu.filter(item => 
        item.category === "Kids Menu" )
    const beverages= props.menu.filter(item=>
            item.category === "Beverages" || 
            item.category === "Coffee & Tea")
            

    const style = {
        fontFamily: "Russo One",
        backgroundColor: '#F1F1E2',
        color: "#A370A7"
    }

    return (
        <div>
        <h2 style={style} > K I D ' S    M E N U </h2>
        
        <Columns> 
            <Columns.Column> 
                {kmenu.map(item => 
                    <MenuItem 
                    key={item.id} 
                    item={item} 
                    price={item.price}
                    description={item.description}
                    
                />)}
            </Columns.Column> 
        </Columns>
        <h2 style={style}> B E V E R A G E S</h2>
        <Columns> 
            <Columns.Column> 
                {beverages.map(item => 
                    <MenuItem 
                    key={item.id} 
                    item={item} 
                    price={item.price}
                    description={item.description}
                    
                />)}
            </Columns.Column> 
        </Columns>
        </div>
    )
}
