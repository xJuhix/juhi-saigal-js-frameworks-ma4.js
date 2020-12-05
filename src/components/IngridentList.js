import React from 'react';


function IngredientList({ ingredients }) {

    const ingredients = ingredients.split(', ')

    return (
        <div>
            <b>Ingredients: </b>
            {
                ingredients.map(i => <span class="badge badge-primary mr-1">{i}</span>)
            }
        </div>
    );
}

export default IngredientList;