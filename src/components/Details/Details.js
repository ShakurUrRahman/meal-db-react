import React from 'react';

const Details = (props) => {
    const { strMealThumb, strMeal, strInstructions } = props.meal;
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{strMeal}</h3>
                    <img src={strMealThumb} alt="" />
                    <p className="py-4">{strInstructions}</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;