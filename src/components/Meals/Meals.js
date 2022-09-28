import { data } from 'autoprefixer';
import { secondary } from 'daisyui/src/colors/colorNames';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal.js/Meal';


const Meals = () => {
    return (
        <div>
            <LoadMeals></LoadMeals>
        </div>
    );
};

function LoadMeals() {
    const [meals, setMeals] = useState([]);
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])

    const addMenu = (meal) => {
        console.log(meal);

        const newMenu = [...menu, { ...meal, quantity: 1 }];

        setMenu(newMenu);
    }

    return (
        <div className='grid lg:grid-cols-4 sm:grid-cols-2'>
            <div className='col-span-3'>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-2'>
                    {
                        meals.map(meal => <Meal
                            meal={meal}
                            addMenu={addMenu}
                            key={meal.idMeal}
                        ></Meal>)
                    }
                </div>

            </div>
            <div className='col-span-1 bg-slate-400 m-2 '>
                <Cart menu={menu}
                    setMenu={setMenu}></Cart>
            </div>
        </div>
    )
}

export default Meals;