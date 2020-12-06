import React from "react";


function IngredientList({ ingredients }) {

    const ingredientsAll = ingredients.split(', ')

    return (
        <div>
            <p>Ingredients:</p>
            {
                ingredientsAll.map(i => ({i}
            ))}
        </div>
    );
}

export default IngredientList;