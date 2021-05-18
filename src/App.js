import React from 'react'
import Item from './Item.js'
import Todo from'./components/Todo'
import './'

const App = () => {
    return(
        <div className="App">
            {Todo.map(el=>{
                console.log(el.image);
                return(
                    <Item
                        id={el._id}
                        name={el.name}
                        image={el.image}
                        description={el.description}
                        brand={el.brand}
                        category={el.category}
                        price={el.price}
                        countInStock={el.countInStock}
                        rating={el.rating}
                        numReviews={el.numReviews}
                    />
                )
            })}
        </div>
    )
}

export default App
