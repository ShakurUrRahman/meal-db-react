import React from 'react';

const Cart = (props) => {
    const removeItem = (id) => {
        const product = props.menu.filter(item => item.idMeal !== id)
        props.setMenu(product)
    }
    return (
        <div className='sticky top-0 right-0'>
            <h1 className='text-2xl'>Here is your added menu:</h1>
            <div >
                {props.menu.map(item =>
                    <div>
                        <p className='mt-2'>{item.strMeal} {item.strMeal.length}</p>
                        <button className='btn btn-secondary mt-2' onClick={() => removeItem(item.idMeal)}>Remove</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;