
import React from 'react'
import Card from '../card/Card.js'
import './styles.css'
//with props we can get any parameter thats passed to this component
function CardList(props) {
    return (
        <div className='card-list'>
            {props.monsters.map((monster) => (
                <Card key={monster.id} monster={monster} />
            ))}
        </div>
    )
}//props children allow to access what has been passed to <CardList> .... </CardList> 

export default CardList
