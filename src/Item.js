import React from 'react'

const Item = (props) => {
    return (
        <div className='kamron'>
            <div className='krn'>
                <img className="imagess" src={`${props.image}`} />
                <h3>{props.brand}</h3>
                <h3>{props.name}</h3>
                <h3>{props.price}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Item
