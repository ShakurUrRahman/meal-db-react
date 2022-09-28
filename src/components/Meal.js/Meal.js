import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCoffee, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Details from '../Details/Details';

const Meal = (props) => {
    const { addMenu, meal } = props;
    const { strMealThumb, strMeal, strInstructions } = props.meal;

    // console.log(props);

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={strMealThumb} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{strMeal}</h2>
                <p>{strInstructions.substring(0, 100)}...</p>
                <div className="card-actions mt-2">
                    <button className='btn btn-primary' onClick={() => addMenu(meal)}>Add Menu<FontAwesomeIcon className='ml-2' icon={faCartShopping}></FontAwesomeIcon></button>

                </div>
                <div>
                    <label htmlFor="my-modal-6" className="btn modal-button">See Details</label>
                    <Details meal={meal}></Details>
                </div>
            </div>
        </div>
    );
};

export default Meal;