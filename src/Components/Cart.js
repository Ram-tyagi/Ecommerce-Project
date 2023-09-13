import React from 'react'


const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]
const Cart = (props) => {
  

       
  return (
    <section>
    <button onClick={props.onXClick}>X</button>
       <div >Cart</div>
        <div className="row">
        {cartElements.map((product, index) => (
            <div className="col-md-3" key={index}>
            <div className="card">
            <img src={product.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.price}</p>
            <p className="card-text">{product.quantity}</p>
            <form>
            <input type="number" />
            
          </form>
    </div>
    </div>
    </div>
    ))}
    </div>
    
    </section>

)}

export default Cart;